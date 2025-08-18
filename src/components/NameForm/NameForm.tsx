import React, { useState } from "react";
import { TextField, Button } from "components";
import { useNavigate } from "react-router-dom";
import { getUserName, setUserName } from "../../helpers/localStorage.helpers";

interface NameFormProps {}

const NameForm: React.FC<NameFormProps> = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.value;
    setName(inputName);
  };

  const saveName = () => {
    setUserName(name);
    window.location.href = "/";
    // navigate("/");
  };

  const getTitle = () => {
    const savedName = getUserName();
    // if (savedName) {
      return (
        <>
        {!savedName ? null :
        <div
          style={{ fontSize: "35px", fontWeight: "bold" }}
        >{`אהלן ${savedName}`}</div>
       }
       <div
        style={{ fontSize: "35px", fontWeight: "bold", textAlign: "center" }}
      >
        תרשמו בבקשה את השם כדאי שנדע מי אתם ❤️
        <br/>
        בבקשה לא שם מטומטם 
      </div>
      </>
    );
  };

  return (
    <div
      className="name"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        gap: 20,
      }}
    >
      {getTitle()}
      <div style={{ width: "70vw" }}>
        <TextField onChange={handleInputChange} />
      </div>
      <Button onClick={saveName}>שמור</Button>
    </div>
  );
};

export default NameForm;
