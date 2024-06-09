import React, { useState, useCallback } from "react";
import InputForm from "./InputForm";
// import { makeStyles } from "@material-ui/core";
// import { IncomingWebhook } from "@slack/webhook"

// const useStyles = makeStyles({
//   btnWrapper: {
//     display: "flex",
//     justifyContent: "center",
//   },
// 	send: {
// 		background: "#2DB2A4",
// 		color: "#fff",
// 		margin: "30px 10px",
// 		border: "none",
// 		outline: "none",
// 	},
// 	cancel: {
// 		background: "#999",
// 		color: "#fff",
// 		margin: "30px 10px",
// 		border: "none",
// 		outline: "none",
// 	},
// });

const Form = () => {
  // const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const inputName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );
  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );
  const inputDescription = useCallback(
    (event) => {
      setDescription(event.target.value);
    },
    [setDescription]
  );

  const handleClear = useCallback(() => {
    setName("");
    setEmail("");
    setDescription("");
  }, []);

  const submitForm = () => {
    if (name !== "" && email !== "" && description !== "") {
      const payload = {
        text:
          "ブログからお問い合わせがありました。\n" +
          "------------------------- \n" +
          "お名前: " +
          name +
          "\n" +
          "Email: " +
          email +
          "\n" +
          "お問い合わせ内容: \n" +
          description +
          "\n" +
          "------------------------- \n",
      };

      fetch(process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL, {
        method: "POST",
        body: JSON.stringify(payload),
      })
        .then(() => {
          alert("送信が完了しました。後ほどご連絡いたします。");
          handleClear();
        })
        .catch((err) => {
          console.log("エラー発生", err);
        });
    } else {
      alert("必須項目が空白です");
    }
  };

  return (
    <>
      <InputForm
        // className={classes.inputRow}
        label={"お名前（必須）"}
        multiline={false}
        rows={1}
        value={name}
        type={"text"}
        onChange={inputName}
      />
      <InputForm
        // className={classes.inputRow}
        label={"メールアドレス（必須）"}
        multiline={false}
        rows={1}
        value={email}
        type={"email"}
        onChange={inputEmail}
      />
      <InputForm
        label={"お問い合わせ内容（必須）"}
        multiline={true}
        rows={10}
        value={description}
        type={"text"}
        onChange={inputDescription}
      />
      <div
      // className={classes.btnWrapper}
      >
        <button
          onClick={handleClear}
          // className={classes.cancel}
        >
          キャンセル
        </button>
        <button
          onClick={submitForm}
          //className={classes.send}
        >
          送信する
        </button>
      </div>
    </>
  );
};

export default Form;
