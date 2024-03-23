import {useRouteError} from 'react-router-dom'

const color = {
    color: 'red',
    fontSize: '45px',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center'
}

const NotFound = () => {
    const error = useRouteError();
    console.log(error)
  return (
    <>
      {/* <p>{error.error.message}</p> */}
      <small style={color}>Oops !!! something went wrong, please try again later !!</small>
      <p>{error.status}: {error.statusText}</p>
    </>
  );
};

export default NotFound;
