// prisma/seed.js

import bcrypt from 'bcrypt';
import 'dotenv/config';
import { prisma } from '../src/lib/prisma.js';

async function main() {
  console.log('🌱 กำลังเริ่มทำ Seeding ข้อมูลชุดใหญ่ (20 รายการต่อโมเดล)...');

  // 1. เคลียร์ข้อมูลเก่าทิ้ง (ลำดับการลบจากตารางลูกไปตารางแม่)
  await prisma.memberOrderItem.deleteMany();
  await prisma.partyMember.deleteMany();
  await prisma.party.deleteMany();
  await prisma.review.deleteMany();
  await prisma.savedRestaurant.deleteMany();
  await prisma.menu.deleteMany();
  await prisma.operatingHour.deleteMany();
  await prisma.restaurantImage.deleteMany();
  await prisma.restaurant.deleteMany();
  await prisma.user.deleteMany();
  console.log('🧹 ล้างข้อมูลเก่าเรียบร้อย');

  const hashedPassword = await bcrypt.hash('123456', 10);

  // ---------------------------------------------------------
  // 2. สร้าง Users (20 คน)
  // ---------------------------------------------------------
  const users = [];
  for (let i = 1; i <= 20; i++) {
    const role = i === 1 ? 'ADMIN' : (i <= 5 ? 'OWNER' : 'USER');
    const user = await prisma.user.create({
      data: {
        email: i === 1 ? 'admin@wongnork.com' : `user${i}@example.com`,
        password: hashedPassword,
        name: i === 1 ? 'Admin Master' : `User Name ${i}`,
        role: role,
        avatarUrl: `https://i.pravatar.cc/150?u=${i}`,
        provider: 'LOCAL'
      }
    });
    users.push(user);
  }
  console.log(`👤 สร้างข้อมูล User สำเร็จ ${users.length} คน (Admin 1, Owner 4, User 15)`);

  // ---------------------------------------------------------
  // 3. สร้าง Restaurants (20 ร้าน)
  // ---------------------------------------------------------
  const categories = ['Shabu', 'Cafe', 'Japanese', 'BBQ', 'Thai', 'Western', 'Izakaya', 'Dessert', 'Street Food', 'Fine Dining'];
  const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  
  const restaurants = [];
  for (let i = 1; i <= 20; i++) {
    const owner = users[Math.floor(Math.random() * 5)]; // เจ้าของร้านสุ่มจาก 5 คนแรก
    const restaurant = await prisma.restaurant.create({
      data: {
        name: `ร้านอาหารที่ ${i} - ${categories[i % categories.length]}`,
        description: `คำอธิบายร้านอาหารอันดับที่ ${i} บรรยากาศดี อาหารอร่อย ราคาย่อมเยา เหมาะสำหรับทุกเพศทุกวัย`,
        lat: 13.7 + (Math.random() * 0.1),
        lng: 100.5 + (Math.random() * 0.1),
        category: categories[i % categories.length],
        ownerId: owner.id,
        images: {
          create: [
            { url: `https://picsum.photos/seed/rest${i}-1/800/600`, isCover: true },
            { url: `https://picsum.photos/seed/rest${i}-2/800/600`, isCover: false }
          ]
        },
        operatingHours: {
          create: days.map(day => ({
            day: day,
            openTime: "10:00",
            closeTime: "22:00",
            isClosed: false
          }))
        },
        menus: {
          create: Array.from({ length: 5 }).map((_, j) => ({
            name: `เมนู ${j + 1} ของร้าน ${i}`,
            description: `รายละเอียดเมนูแสนอร่อยลำดับที่ ${j + 1}`,
            price: 50 + (Math.random() * 500),
            category: j === 0 ? 'Recommend' : 'General',
            imageUrl: `https://picsum.photos/seed/menu${i}-${j}/400/300`
          }))
        }
      },
      include: { menus: true }
    });
    restaurants.push(restaurant);
  }
  console.log(`🍲 สร้างข้อมูลร้านอาหาร สำเร็จ ${restaurants.length} ร้าน (พร้อมรูปภาพ, เวลาเปิด-ปิด และเมนู)`);

  // ---------------------------------------------------------
  // 4. สร้าง Parties (20 ปาร์ตี้)
  // ---------------------------------------------------------
  const parties = [];
  for (let i = 1; i <= 20; i++) {
    const restaurant = restaurants[i - 1];
    const leader = users[Math.floor(Math.random() * users.length)];
    const meetupTime = new Date();
    meetupTime.setDate(meetupTime.getDate() + (i % 7)); // นัดหมายใน 1-7 วันข้างหน้า

    const party = await prisma.party.create({
      data: {
        name: `ไปกิน ${restaurant.name} กันเถอะ ตี้ที่ ${i}`,
        details: `หาเพื่อนร่วมโต๊ะหารค่าอาหารที่ร้าน ${restaurant.name} มากันเยอะๆ นะครับ`,
        meetupTime: meetupTime,
        maxParticipants: 4 + Math.floor(Math.random() * 5), // 4-8 คน
        contactInfo: `Line: user${i}_connect / Tel: 081-234-56${i.toString().padStart(2, '0')}`,
        status: 'OPEN',
        serviceCharge: 10,
        vat: 7,
        restaurantId: restaurant.id,
        leaderId: leader.id
      }
    });
    parties.push(party);

    // จำลองคนเข้าร่วมตี้ (2-4 คนต่อตี้)
    const memberCount = 2 + Math.floor(Math.random() * 3);
    const shuffledUsers = [...users].sort(() => 0.5 - Math.random());
    const potentialMembers = shuffledUsers.slice(0, memberCount);

    for (const memberUser of potentialMembers) {
      // ตรวจสอบไม่ให้ซ้ำกับ Leader (ถ้าจะเข้มงวด แต่ใน seed นี้เอาแบบง่ายๆ ก่อน)
      try {
        const member = await prisma.partyMember.create({
          data: {
            partyId: party.id,
            userId: memberUser.id
          }
        });

        // จำลองการสั่งอาหาร (Split Bill) สุ่มสั่ง 1-2 อย่าง
        const menuToOrder = restaurant.menus[Math.floor(Math.random() * restaurant.menus.length)];
        await prisma.memberOrderItem.create({
          data: {
            memberId: member.id,
            menuId: menuToOrder.id
          }
        });
      } catch (e) {
        // ข้ามกรณี Unique Constraint Error (User เดิมเข้าตี้เดิม)
      }
    }
  }
  console.log(`🎉 สร้างข้อมูล Party สำเร็จ ${parties.length} ปาร์ตี้ (พร้อมสมาชิกและการสั่งอาหาร)`);

  // ---------------------------------------------------------
  // 5. สร้าง Reviews (20 รายการ)
  // ---------------------------------------------------------
  for (let i = 1; i <= 20; i++) {
    const user = users[Math.floor(Math.random() * users.length)];
    const restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    await prisma.review.create({
      data: {
        rating: 1 + Math.floor(Math.random() * 5),
        comment: `รีวิวลำดับที่ ${i}: ร้านนี้บริการดีมาก อาหารอร่อย คุ้มค่าเงินที่จ่ายไป แนะนำเลยครับ!`,
        userId: user.id,
        restaurantId: restaurant.id
      }
    });
  }
  console.log(`⭐ สร้างข้อมูล Review สำเร็จ 20 รายการ`);

  // ---------------------------------------------------------
  // 6. สร้าง SavedRestaurants (20 รายการ)
  // ---------------------------------------------------------
  for (let i = 1; i <= 20; i++) {
    const user = users[Math.floor(Math.random() * users.length)];
    const restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    try {
      await prisma.savedRestaurant.create({
        data: {
          userId: user.id,
          restaurantId: restaurant.id
        }
      });
    } catch (e) {
      // ข้ามกรณีเซฟซ้ำ
    }
  }
  console.log(`📌 สร้างข้อมูล Saved Restaurant สำเร็จ (ประมาณ 20 รายการ)`);

  console.log('✅ Seeding เสร็จสมบูรณ์! พร้อมสำหรับการพัฒนาต่อแล้ว 🚀');
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
