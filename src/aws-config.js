const staging = {
    API: {
        endpoints: [
            {
                name: "comics",
                endpoint: "https://api.peanuts.today/staging",
                custom_header: async () => { 
                    return { 'x-api-key' : 'XblEyqCUiYBnBF0BlcTw2RqFNJzlSXRaD6Tx4nvd' } 
                  }
            }
        ]
    }
}

const production = {
    API: {
        endpoints: [
            {
                name: "comics",
                endpoint: "https://api.peanuts.today/production",
                custom_header: async () => { 
                    return { 'x-api-key' : 'XblEyqCUiYBnBF0BlcTw2RqFNJzlSXRaD6Tx4nvd' } 
                  }
            }
        ]
    }
}

const config = process.env.REACT_APP_STAGE === 'production'
  ? production
  : staging;

export default config