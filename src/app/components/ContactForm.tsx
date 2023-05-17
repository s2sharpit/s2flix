'use client'

import styles from "@/app/contact/contact.module.css"
import { Mulish } from "next/font/google";
import { useState } from "react";
import submitContact from "@/app/contact/action";
const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})


const ContactForm = () => {
    const [status, setStatus] = useState("");

    const handleSubmit = async (formData: FormData) => {
        try {
            const response = await submitContact({
              username: String(formData.get("username")),
              email: String(formData.get("email")),
              phone: Number(formData.get("phone")),
              message: String(formData.get("message")),
            });
            
            if (response.status === 200) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (e) {
            console.log(e)
        }

    }



    return (
        <form className={styles.contact_form} action={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Enter your name
                    <input type="text" name="username" id="username"
                        placeholder="Enter your name"
                        className={mulish.className}
                        required
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Email
                    <input type="text" name="email" id="email"
                        placeholder="Enter your email"
                        className={mulish.className}
                        required
                        autoComplete="off"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Phone Number
                    <input type="number" name="phone" id="phone"
                        placeholder="Enter your phone"
                        className={mulish.className}
                        required
                        autoComplete="off"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message
                    <textarea name="message" id="message" rows={5}
                        placeholder="Enter your Message"
                        className={mulish.className}
                        required
                        autoComplete="off"
                    />
                </label>
            </div>

            <div>
                {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}

                <button type="submit" className={mulish.className}>Send Message</button>
            </div>
        </form>
    );
};

export default ContactForm;