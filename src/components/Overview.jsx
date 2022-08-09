const Overview = ({ overview, backdrop, toggleOverview }) => {

  return (
    <div className="overview">
      <img src={ backdrop } alt="backdrop" onClick={toggleOverview}/>
      <div>{ overview }</div>
      <button onClick={toggleOverview}>Hide</button>
    </div>
  )
}

export default Overview