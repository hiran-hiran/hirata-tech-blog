import React, { useState, useCallback } from 'react'
import Button from '@material-ui/core/Button';
import InputForm from './InputForm';
import { IncomingWebhook } from "@slack/webhook"


const Form = () => {
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

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

        const payload = {
            text: "お問い合わせがありました。\n" +
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
    }

    return (
        <>
            <InputForm label={"お名前（必須）"} multiline={false} rows={1} value={name} type={"text"} onChange={inputName} />
            <InputForm label={"メールアドレス（必須）"} multiline={false} rows={1} value={email} type={"email"} onChange={inputEmail} />
            <InputForm label={"お問い合わせ内容（必須）"} multiline={true} rows={5} value={description} type={"text"} onChange={inputDescription} />
            <Button onClick={handleClear} color="primary">キャンセル</Button>
            <Button onClick={submitForm} color="primary">送信する</Button>
        </>
    )
}

export default Form
