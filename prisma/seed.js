// prisma/seed.js

import bcrypt from 'bcrypt';
import 'dotenv/config';
import { prisma } from '../src/lib/prisma.js';

async function main() {
  console.log('🌱 กำลังเริ่มทำ Seeding ข้อมูลชุดใหญ่ (50 รายการต่อโมเดล)...');

  // 1. เคลียร์ข้อมูลเก่าทิ้ง (ลำดับการลบจากตารางลูกไปตารางแม่)
  await prisma.partyOrderItemSharer.deleteMany();
  await prisma.partyOrderItem.deleteMany();
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
  // 2. สร้าง Users (50 คน)
  // ---------------------------------------------------------
  const users = [];
  for (let i = 1; i <= 50; i++) {
    const role = i === 1 ? 'ADMIN' : (i <= 10 ? 'OWNER' : 'USER');
    const user = await prisma.user.create({
      data: {
        email: i === 1 ? 'admin@wongnork.com' : `user${i}@example.com`,
        password: hashedPassword,
        name: i === 1 ? 'Admin Master' : `User Name ${i}`,
        role: role,
        avatarUrl: `https://i.pravatar.cc/150?u=${i + 100}`,
        provider: 'LOCAL',
        isVerified: true // 🌟 ตั้งค่าเป็น true ตามที่ต้องการ
      }
    });
    users.push(user);
  }
  console.log(`👤 สร้างข้อมูล User สำเร็จ ${users.length} คน (Admin 1, Owner 9, User 40)`);

  // ---------------------------------------------------------
  // 3. สร้าง Restaurants (50 ร้าน)
  // ---------------------------------------------------------
  const categories = ['Shabu', 'Cafe', 'Japanese', 'BBQ', 'Thai', 'Western', 'Izakaya', 'Dessert', 'Street Food', 'Fine Dining'];
  const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  
  const restaurants = [];
  for (let i = 1; i <= 50; i++) {
    const owner = users[Math.floor(Math.random() * 10)]; // เจ้าของร้านสุ่มจาก 10 คนแรก
    const restaurant = await prisma.restaurant.create({
      data: {
        name: `ร้านอาหารที่ ${i} - ${categories[i % categories.length]}`,
        description: `คำอธิบายร้านอาหารอันดับที่ ${i} บรรยากาศดี อาหารอร่อย ราคาย่อมเยา เหมาะสำหรับทุกเพศทุกวัย และการมาเปิดตี้กับเพื่อนๆ`,
        lat: 13.7 + (Math.random() * 0.15),
        lng: 100.5 + (Math.random() * 0.15),
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
          create: Array.from({ length: 8 }).map((_, j) => ({
            name: `เมนู ${j + 1} ของร้าน ${i}`,
            description: `รายละเอียดเมนูแสนอร่อยลำดับที่ ${j + 1}`,
            price: 80 + (Math.random() * 800),
            category: j < 2 ? 'Recommend' : 'General',
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
  // 4. สร้าง Parties (50 ปาร์ตี้)
  // ---------------------------------------------------------
  const partyStatuses = ['OPEN', 'FULL', 'COMPLETED'];
  const parties = [];
  
  for (let i = 1; i <= 50; i++) {
    const restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    const leader = users[Math.floor(Math.random() * users.length)];
    const meetupTime = new Date();
    // บางปาร์ตี้ให้เป็นอดีต (สำหรับสถานะ COMPLETED) บางอันเป็นอนาคต
    const status = partyStatuses[i % 3];
    if (status === 'COMPLETED') {
        meetupTime.setDate(meetupTime.getDate() - (1 + Math.floor(Math.random() * 10)));
    } else {
        meetupTime.setDate(meetupTime.getDate() + (1 + Math.floor(Math.random() * 10)));
    }

    const party = await prisma.party.create({
      data: {
        name: `ตี้หารที่ ${restaurant.name} (ตี้ที่ ${i})`,
        details: `ใครว่างมาเจอกันครับ อยากทาน ${restaurant.category} ร้านนี้มานานแล้ว หารเท่ากันทุกคนครับ`,
        meetupTime: meetupTime,
        maxParticipants: 4 + Math.floor(Math.random() * 6),
        contactInfo: `Line: user${i}_wongnork / Tel: 08${i.toString().padStart(2, '0')}-000-0000`,
        status: status,
        serviceCharge: 10 + (Math.random() * 100),
        vat: 7 + (Math.random() * 50),
        restaurantId: restaurant.id,
        leaderId: leader.id
      }
    });
    parties.push(party);

    // 🌟 Leader ต้องเป็น Member คนแรกเสมอ
    await prisma.partyMember.create({
      data: {
        partyId: party.id,
        userId: leader.id
      }
    });

    // เพิ่มสมาชิกสุ่ม 2-5 คน
    const memberCount = 2 + Math.floor(Math.random() * 4);
    const potentialMembers = users.filter(u => u.id !== leader.id).sort(() => 0.5 - Math.random()).slice(0, memberCount);
    
    const members = [];
    for (const u of potentialMembers) {
        const m = await prisma.partyMember.create({
            data: { partyId: party.id, userId: u.id }
        });
        members.push(m);
    }

    // 🌟 จำลองการสั่งอาหาร (Split Bill)
    // 1. สั่งเมนูจากร้านอาหาร (3-5 รายการ)
    const orderItemCount = 3 + Math.floor(Math.random() * 3);
    for (let k = 0; j < orderItemCount; k++) {
        const menu = restaurant.menus[Math.floor(Math.random() * restaurant.menus.length)];
        const orderItem = await prisma.partyOrderItem.create({
            data: {
                partyId: party.id,
                addedById: leader.id,
                menuId: menu.id,
                isCustom: false,
                quantity: 1 + Math.floor(Math.random() * 2)
            }
        });

        // สุ่มคนมาร่วมหารรายการนี้
        const sharerCount = 1 + Math.floor(Math.random() * (members.length + 1));
        const shuffledUsers = [leader, ...potentialMembers].sort(() => 0.5 - Math.random()).slice(0, sharerCount);
        
        for (const sharer of shuffledUsers) {
            await prisma.partyOrderItemSharer.create({
                data: {
                    partyOrderItemId: orderItem.id,
                    userId: sharer.id
                }
            });
        }
    }

    // 2. สั่ง Custom Item (1 รายการ เช่น ค่าเปิดขวด)
    const customItem = await prisma.partyOrderItem.create({
        data: {
            partyId: party.id,
            addedById: leader.id,
            isCustom: true,
            name: 'ค่าเครื่องดื่มพิเศษ / ค่าเปิดขวด',
            price: 200 + Math.random() * 500,
            quantity: 1
        }
    });
    // ให้ทุกคนในตี้หารรายการพิเศษนี้
    const allUsersInParty = [leader, ...potentialMembers];
    for (const u of allUsersInParty) {
        await prisma.partyOrderItemSharer.create({
            data: {
                partyOrderItemId: customItem.id,
                userId: u.id
            }
        });
    }
  }
  console.log(`🎉 สร้างข้อมูล Party สำเร็จ ${parties.length} ปาร์ตี้ (พร้อมจำลองระบบ Split Bill ครบวงจร)`);

  // ---------------------------------------------------------
  // 5. สร้าง Reviews (50 รายการ)
  // ---------------------------------------------------------
  for (let i = 1; i <= 50; i++) {
    const user = users[Math.floor(Math.random() * users.length)];
    const restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    await prisma.review.create({
      data: {
        rating: 2 + Math.floor(Math.random() * 4),
        comment: `รีวิวที่ ${i}: ร้าน ${restaurant.name} บรรยากาศน่านั่งมากครับ อาหาร ${restaurant.category} รสชาติดีเลย`,
        userId: user.id,
        restaurantId: restaurant.id
      }
    });
  }
  console.log(`⭐ สร้างข้อมูล Review สำเร็จ 50 รายการ`);

  // ---------------------------------------------------------
  // 6. สร้าง SavedRestaurants (50 รายการ)
  // ---------------------------------------------------------
  for (let i = 1; i <= 50; i++) {
    const user = users[Math.floor(Math.random() * users.length)];
    const restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    try {
      await prisma.savedRestaurant.create({
        data: {
          userId: user.id,
          restaurantId: restaurant.id
        }
      });
    } catch (e) {}
  }
  console.log(`📌 สร้างข้อมูล Saved Restaurant สำเร็จ (ประมาณ 50 รายการ)`);

  console.log('✅ Seeding ชุดใหม่ 50 รายการ พร้อมระบบ Split Bill และ isVerified=true เสร็จสมบูรณ์! 🚀');
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
