import './index.css';

function ErrorField({msg}) {
  return (
    <>
      {true && <p className='error'>{msg}</p>}
    </>
  );
}

export default ErrorField;
