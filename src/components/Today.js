import React from 'react';
import API from '@aws-amplify/api'
import { Image, Spinner } from 'react-bootstrap'
import '../style/App.css';

const ImageWithText = (props) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const month = monthNames[props.comic.pub_month-1]
  const comicType = props.comic.comic_type.substring(0,1).toUpperCase() + props.comic.comic_type.substring(1)
  return (
    <div>
      <br/>
      <h2>Today's Comic</h2>
      <p>
        Year Published: {props.comic.pub_year}
        <br/>
        Month Published: {month}
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

  async getToday() {
    const data = await fetch('from:api')
    return data
  }

  render() {
    return (
      <div className="App">
            {
                this.state.comic
                ? <ImageWithText comic={this.state.comic} />
                : <Spinner animation="border" />
            }
      </div>
    );
  }
}

export default Today;
