import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import styles from './App.module.css'
class App extends Component {
  state = {
    isLoading: true,
    taches: []
  };

// eslint-disable-next-line
constructor(props){
  super(props);
}

  async componentDidMount() {
    const tachesResponse= await fetch('/api/taskExecution');
    const body = await tachesResponse.json();
    this.setState({ taches: body, isLoading: false });
  }

  render() {
    const {taches,isLoading} = this.state;






   
    if (isLoading) {
      return <p>Loading...</p>;
    }

    let rows=taches.map(tache=>
      <tr>
      <td>{tache.id}</td>
      <td>{tache.creationDate}</td>
      <td>{tache.taskConfigName}</td>
      <td>{tache.durationInSeconds}</td>
      <td>{tache.status}</td>
      <td>{tache.transportedFiles}</td>
      <td>{tache.message}</td>
      <td>{tache.emailErrorSent}</td>
      <td>{tache.startDate}</td>  
      <td>{tache.endDate}</td>
      
    </tr> 
     )
  
    return (
     <div className={styles.app}>
       <h1>TaskExecution List</h1>
       <table  className={styles.table}>
        <thead>
        <tr>
        <th>ID</th>
        <th>CreationDate</th>
         <th>TaskConfigName</th>
         <th>DurationInSeconds</th>
         <th>Status</th>
         <th>TransportedFiles</th>
         <th>Message</th>
         <th>EmailErrorSent</th>
         <th>StartDate</th>
         <th>EndDate</th>
         >
  </tr>


        </thead>

   <tbody>{rows}</tbody>




       </table>

       <div className={styles.pagination}>
          <span>&laquo;</span>
          <span className={styles.active}>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>


        </div>











     
    );
  }
}

export default App;