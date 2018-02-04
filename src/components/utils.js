import authKeys from '../authKeys.js';

export function fetchProjectAndTaskData(queryString, type) {
    fetch(queryString, { 
        method: 'get', 
        headers: {
          'Authorization': 'Bearer ' + authKeys.testKey, 
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then((results) => {
          if (results.status === 200) {
            return results.json();
          } else {
            this.setState({
              isError: true
            })
            return;
          }
        })
        .then(resultsData => {
          this.setState({
            isLoaded: true
          })
          if(!resultsData) {
            return;
          }
          if(type === 'project') {
            this.setState({
              projectData: resultsData.data
            })
          } else {
            this.setState ({
              tasks: resultsData.data
            })
          }
        })
  }