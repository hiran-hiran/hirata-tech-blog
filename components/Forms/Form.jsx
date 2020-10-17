import React, { useState, useCallback } from 'react'
import Button from '@material-ui/core/Button';
import InputForm from './InputForm';
import { makeStyles } from '@material-ui/core';
// import { IncomingWebhook } from "@slack/webhook"

const useStyles = makeStyles({
    btnWrap: {
        textAlign: "center",
    },
    send: {
        background: "#2DB2A4",
        color: "#fff",
        margin: "30px 10px",
        border: "none",
    },
    cancel: {
        background: "#e81e31",
        color: "#fff",
        margin: "30px 10px",
        border: "none",
    }
})

const Form = () => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const inputDescription = useCallback((event) => {
        setDescription(event.target.value)
    }, [setDescription]);
    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
    }, [setEmail]);
    const inputName = useCallback((event) => {
        setName(event.target.value)
    }, [setName]);

    const handleClear = useCallback(() => {
        setName("")
        setEmail("")
        setDescription("")
    }, [])

    
    const submitForm = () => {
        if (name !== "" && email !== "" && description !== "") {
            const payload = {
                text: "ブログからお問い合わせがありました。\n" +
                    "------------------------- \n" +
                    "お名前: " + name + "\n" +
                    "Email: " + email + "\n" +
                    "お問い合わせ内容: \n" + description + "\n" +
                    "------------------------- \n"
            }

            fetch(process.env.SLACK_WEBHOOK_URL, {
                method: "POST",
                body: JSON.stringify(payload)
            }).then(() => {
                alert("送信が完了しました。後ほどご連絡いたします。")
                handleClear()
            }).catch((err) => {
                console.log("エラー発生", err);
            })
        } else {
            
            alert("必須項目が空白です")
        }
    }

    return (
        <>
            <InputForm label={"お名前（必須）"} multiline={false} rows={1} value={name} type={"text"} onChange={inputName}/>
            <InputForm label={"メールアドレス（必須）"} multiline={false} rows={1} value={email} type={"email"} onChange={inputEmail} />
            <InputForm label={"お問い合わせ内容（必須）"} multiline={true} rows={10} value={description} type={"text"} onChange={inputDescription} />
            {/* <div className={classes.btnWrap}> */}
                <Button onClick={handleClear} className={classes.cancel} variant="outlined" size="large">キャンセル</Button>
                <Button onClick={submitForm} className={classes.send}  variant="outlined" size="large">送信する</Button>
            {/* </div> */}
        </>
    )
}

export default Form
