import React from 'react';
import API from '@aws-amplify/api'
import { Image, Spinner, Row } from 'react-bootstrap'
import '../style/Today.css'

const ImageWithText = (props) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const month = monthNames[props.comic.pub_month-1]
  let comicType = props.comic.comic_type.substring(0,1).toUpperCase() + props.comic.comic_type.substring(1)
  comicType = comicType.split('.')[0]
  return (
    <div>
      <br/>
      <h2><u>Today's Comic</u></h2>
      <p>
        Month Published: {month}
        <br/>
        Year Published: {props.comic.pub_year}
        <br/>
        Comic Type: {comicType}
      </p>
      <br></br>
      <Image src={props.comic.url} fluid/>
        <p className="text-muted">Comic for {props.comic.display_date}</p>      
    </div>
  )
}

class Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comic: null
    }
  }

  async componentDidMount() {
    const today = await API.get('comics', '/comics/today')
    this.setState({ comic: today })
  }

  render() {
    return (
        <div className="Today-body">
          <Row className="Today-body">
          {
            this.state.comic
            ? <ImageWithText comic={this.state.comic} />
            : <Spinner animation="border" />
          }
          </Row>
        </div>
    );
  }
}

export default Today;
