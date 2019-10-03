const staging = {
    API: {
        endpoints: [
            {
                name: "comics",
                endpoint: "https://api.peanuts.today/staging",
                custom_header: async () => { 
                    return { 'x-api-key' : '***REMOVED***' } 
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
                    return { 'x-api-key' : '***REMOVED***' } 
                  }
            }
        ]
    }
}

const config = process.env.REACT_APP_STAGE === 'production'
  ? production
  : staging;

export default config