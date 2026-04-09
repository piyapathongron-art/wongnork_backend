// prisma/seed.js

import bcrypt from 'bcrypt';
import 'dotenv/config';
import { prisma } from '../src/lib/prisma.js';

async function main() {
  console.log('🌱 กำลังเริ่มทำ Seeding...');

  // 1. เคลียร์ข้อมูลเก่าทิ้ง (เรียงลำดับการลบจากตารางลูกไปตารางแม่ เพื่อป้องกัน Foreign Key Error)
  await prisma.review.deleteMany();
  await prisma.partyMember.deleteMany();
  await prisma.party.deleteMany();
  await prisma.menu.deleteMany();
  await prisma.restaurantImage.deleteMany();
  await prisma.restaurant.deleteMany();
  await prisma.user.deleteMany();
  console.log('🧹 ล้างข้อมูลเก่าเรียบร้อย');

  const hashedPassword = await bcrypt.hash('123456', 10);

  // ---------------------------------------------------------
  // 2. สร้าง Users (10 คน)
  // ---------------------------------------------------------
  const usersData = [
    { email: 'admin@wongnork.com', name: 'Admin Jimmy', role: 'ADMIN' },
    { email: 'mhon@wongnork.com', name: 'Mhon', role: 'USER' },
    { email: 'user3@wongnork.com', name: 'Somchai', role: 'USER' },
    { email: 'user4@wongnork.com', name: 'Somsri', role: 'USER' },
    { email: 'user5@wongnork.com', name: 'Mana', role: 'USER' },
    { email: 'user6@wongnork.com', name: 'Manee', role: 'USER' },
    { email: 'user7@wongnork.com', name: 'Piti', role: 'USER' },
    { email: 'user8@wongnork.com', name: 'Chujai', role: 'USER' },
    { email: 'user9@wongnork.com', name: 'Veera', role: 'USER' },
    { email: 'user10@wongnork.com', name: 'Suda', role: 'USER' },
  ];

  const createdUsers = [];
  for (const u of usersData) {
    const user = await prisma.user.create({
      data: { ...u, password: hashedPassword, provider: 'LOCAL' },
    });
    createdUsers.push(user);
  }
  console.log(`👤 สร้างข้อมูล User สำเร็จ ${createdUsers.length} คน`);

  // ---------------------------------------------------------
  // 3. สร้าง Restaurants (10 ร้าน พร้อม Images และ Menus)
  // ---------------------------------------------------------
  const restaurantsData = [
    { name: 'ชาบูชิลๆ สาขาลาดพร้าว', category: 'Shabu', desc: 'ร้านชาบูน้ำดำรสเด็ด' },
    { name: 'คาเฟ่นอนดึก', category: 'Cafe', desc: 'คาเฟ่สำหรับสายปั่นงาน' },
    { name: 'ซูชิขั้นเทพ', category: 'Japanese', desc: 'ซูชิพรีเมียมส่งตรงจากญี่ปุ่น' },
    { name: 'หมูกระทะเยียวยาทุกสิ่ง', category: 'BBQ', desc: 'หมูกระทะบุฟเฟต์รวมน้ำ' },
    { name: 'ส้มตำเจ๊แซ่บ', category: 'Thai', desc: 'ส้มตำปูปลาร้าเด็ดมาก' },
    { name: 'สเต็กลุงหนวด', category: 'Western', desc: 'สเต็กริมทางราคาประหยัด' },
    { name: 'อิซากายะ เมามันส์', category: 'Izakaya', desc: 'ร้านนั่งชิลสไตล์ญี่ปุ่น' },
    { name: 'บิงซูสายหวาน', category: 'Dessert', desc: 'น้ำแข็งไสเกาหลีท็อปปิ้งแน่น' },
    { name: 'กะเพราถาดพี่บิ๊ก', category: 'Street Food', desc: 'กะเพราไซส์ยักษ์กินได้ 3 คน' },
    { name: 'Fine Dining หรูหรา', category: 'Fine Dining', desc: 'ร้านอาหารฝรั่งเศสระดับมิชลิน' },
  ];

  const createdRestaurants = [];
  for (let i = 0; i < restaurantsData.length; i++) {
    const r = restaurantsData[i];
    const restaurant = await prisma.restaurant.create({
      data: {
        name: r.name,
        description: r.desc,
        lat: 13.7 + (Math.random() * 0.2), // สุ่มพิกัดใกล้ๆ กทม.
        lng: 100.5 + (Math.random() * 0.2),
        category: r.category,
        images: {
          create: [
            { url: `https://picsum.photos/seed/cover${i}/800/600`, isCover: true },
            { url: `https://picsum.photos/seed/img${i}/800/600`, isCover: false }
          ]
        },
        menus: {
          create: [
            { name: `เมนูแนะนำ 1 ของ ${r.name}`, price: 100 + (i * 10), category: 'Main' },
            { name: `เมนูแนะนำ 2 ของ ${r.name}`, price: 50 + (i * 5), category: 'Side' },
          ]
        }
      }
    });
    createdRestaurants.push(restaurant);
  }
  console.log(`🍲 สร้างข้อมูลร้านอาหาร สำเร็จ ${createdRestaurants.length} ร้าน`);

  // ---------------------------------------------------------
  // 4. สร้าง Parties (10 ปาร์ตี้) & PartyMembers
  // ---------------------------------------------------------
  const createdParties = [];
  for (let i = 0; i < 10; i++) {
    // ให้ User คนที่ i เป็นคนสร้างปาร์ตี้ และเลือกร้านที่ i
    const leader = createdUsers[i];
    const restaurant = createdRestaurants[i];
    
    // ตั้งเวลาล่วงหน้า 1-10 วัน
    const meetupTime = new Date();
    meetupTime.setDate(meetupTime.getDate() + i + 1);

    const party = await prisma.party.create({
      data: {
        name: `หาคนหาร ${restaurant.name} ครับ`,
        details: `ต้องการคนหารบิลด่วนๆ คุยง่ายไม่เรื่องมาก`,
        meetupTime: meetupTime,
        maxParticipants: 4,
        status: 'OPEN',
        contactInfo: `Line: user${i}_line`,
        leaderId: leader.id,
        restaurantId: restaurant.id,
      }
    });
    createdParties.push(party);

    // จำลองให้มีคนเข้าร่วมตี้ (เอา User คนถัดไปมาเข้าตี้ เพื่อไม่ให้ซ้ำกับ Leader)
    const joinerIndex = (i + 1) % 10; 
    await prisma.partyMember.create({
      data: {
        partyId: party.id,
        userId: createdUsers[joinerIndex].id
      }
    });
  }
  console.log(`🎉 สร้างข้อมูล Party และการเข้าร่วม สำเร็จ 10 ปาร์ตี้`);

  // ---------------------------------------------------------
  // 5. สร้าง Reviews (10 รีวิว)
  // ---------------------------------------------------------
  for (let i = 0; i < 10; i++) {
    // ให้ User รีวิวร้านอาหารที่ตัวเองเคยไป
    await prisma.review.create({
      data: {
        rating: Math.floor(Math.random() * 3) + 3, // สุ่มคะแนน 3-5 ดาว
        comment: `รีวิวร้าน ${createdRestaurants[i].name} บรรยากาศดี อาหารอร่อยมากครับ! (รีวิวจาก ${createdUsers[i].name})`,
        userId: createdUsers[i].id,
        restaurantId: createdRestaurants[i].id,
      }
    });
  }
  console.log(`⭐ สร้างข้อมูล Review สำเร็จ 10 รายการ`);

  console.log('✅ Seeding เสร็จสมบูรณ์แบบ 100%!');
}

main()
  .catch((e) => {
    console.error('❌ เกิดข้อผิดพลาดตอนทำ Seeding:');
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });