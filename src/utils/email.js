import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service : "gmail",
    auth: {
        user:process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})

export const sendVerificationEmail = async (to,link) => {
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