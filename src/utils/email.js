import nodemailer from "nodemailer"
import "dotenv/config"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export const sendVerificationEmail = async (to, link) => {
  const mailOptions = {
    from: '"Wongnork" <${process.env.EMAIL_USER}>',
    to,
    subject: "ยืนยันการสมัครสมาชิก เเอป Wongnork",
    html: `
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>ยินดีต้อนรับสู่ Wongnork!</h2>
        <p>กรุณาคลิกลิงก์ด้านล่างเพื่อยืนยันอีเมลของคุณ ลิงก์นี้จะหมดอายุใน 15 นาที:</p>
        <a href="${link}" style="background-color: #f97316; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
          ยืนยันอีเมลของฉัน
        </a>
      </div>
    `,
  };
  return transporter.sendMail(mailOptions);
}


export const sendResetPasswordEmail = async (email, resetUrl) => {

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Wongnork - เปลี่ยนรหัสผ่านใหม่",
    html: `
      <h2>ขอเปลี่ยนรหัสผ่าน</h2>
      <p>คุณได้ทำการขอเปลี่ยนรหัสผ่าน บัญชี Wongnork ของคุณ</p>
      <p>กรุณาคลิกที่ลิงก์ด้านล่างเพื่อตั้งรหัสผ่านใหม่ (ลิงก์นี้มีอายุ 15 นาที):</p>
      <a href="${resetUrl}" clicktracking=off>${resetUrl}</a>
      <p>หากคุณไม่ได้ทำการร้องขอ โปรดละเว้นอีเมลฉบับนี้</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};