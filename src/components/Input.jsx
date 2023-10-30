const Input = ({type, label}) => {
  return (
    <div className="form-floating my-2">
      <input
        type="text"
        className="form-control"
        id="floatingInput"
      />
      <label for="floatingInput">Phone number</label>
    </div>
  );
};
