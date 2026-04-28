// prisma/seed.js

import bcrypt from 'bcrypt';
import 'dotenv/config';
import { prisma } from '../src/lib/prisma.js';

// 🌟 ข้อมูลร้านอาหารยอดฮิตที่มีอยู่จริงใน กทม. 
const realBangkokRestaurants = [
    {
        cat: 'Isan',
        name: 'ร้านเจ้ไก่ อาหารอีสาน (Jae Kai Isan Food)',
        desc: 'อาหารอีสานรสเด็ดขวัญใจคนนอนดึกย่านพญาไท เมนูแนะนำเพียบทั้งส้มตำ ลาบ น้ำตก หมูย่าง แซ่บถึงใจในราคาสบายกระเป๋า',
        lat: 13.757042, lng: 100.5336598, // พิกัดจริงของร้านเจ้ไก่ ถ.พญาไท
        cover: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=800&q=80', // รูปส้มตำแซ่บๆ
        interior: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', // รูปบรรยากาศร้านชิลๆ
        // 🌟 เพิ่ม exactMenus ตรงนี้! ดึงราคาเป๊ะๆ จากบิลเมนู
        exactMenus: [
            { name: 'เนื้อแดดเดียวทอด', price: 100, img: 'https://images.unsplash.com/photo-1626804475297-41609ea064eb?auto=format&fit=crop&w=400&q=80' },
            { name: 'หมูทอดกระเทียม', price: 100, img: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=400&q=80' },
            { name: 'หอยแครงลวก', price: 90, img: 'https://images.unsplash.com/photo-1556040220-4096d522378d?auto=format&fit=crop&w=400&q=80' },
            { name: 'ลาบหมู', price: 80, img: 'https://images.unsplash.com/photo-1544025162-811c7ffbd77c?auto=format&fit=crop&w=400&q=80' },
            { name: 'น้ำตกเนื้อ', price: 80, img: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=400&q=80' },
            { name: 'ตำกุ้งสด', price: 80, img: 'https://images.unsplash.com/photo-1551224212-70b9ce4f526b?auto=format&fit=crop&w=400&q=80' },
            { name: 'ตำไทยไข่เค็ม', price: 70, img: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&w=400&q=80' },
            { name: 'ตำซั่ว', price: 60, img: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=400&q=80' },
            { name: 'ตำปลาร้า', price: 50, img: 'https://images.unsplash.com/photo-1625937759400-0e12d8a0f9bf?auto=format&fit=crop&w=400&q=80' }
        ],
        // กันเหนียวเผื่อระบบเก่าเรียกหา
        menuImgs: ['https://images.unsplash.com/photo-1626804475297-41609ea064eb?auto=format&fit=crop&w=400&q=80'],
        menuNames: ['ส้มตำปูปลาร้าแซ่บนัว']
    },
    {
        cat: 'Thai Fine Dining',
        name: 'Sorn (ศรณ์)',
        desc: 'ร้านอาหารใต้ Fine Dining ระดับ 2 ดาวมิชลิน วัตถุดิบท้องถิ่นส่งตรงจากภาคใต้ รสชาติจัดจ้านถึงเครื่อง (สุขุมวิท 26)',
        lat: 13.7231004, lng: 100.5685251,
        cover: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=800&q=80',
        interior: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
        menuImgs: ['https://images.unsplash.com/photo-1548943487-a2e4e43b4850?auto=format&fit=crop&w=400&q=80'],
        menuNames: ['ข้าวยำปักษ์ใต้', 'แกงเหลืองปลาคัง', 'คั่วกลิ้งหมูสับ']
    },
    {
        cat: 'Japanese',
        name: 'ISAO (อิซาโอะ)',
        desc: 'ร้านซูชิฟิวชั่นชื่อดังย่านสุขุมวิท 31 โดดเด่นเรื่องโรลซูชิรสชาติเยี่ยม บรรยากาศอบอุ่นสไตล์ญี่ปุ่น',
        lat: 13.7345696, lng: 100.5662613,
        cover: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
        interior: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',
        menuImgs: ['https://images.unsplash.com/photo-1601599423586-2a628ea67098?auto=format&fit=crop&w=400&q=80'],
        menuNames: ['Jackie (Caterpillar Roll)', 'Volcano Scallop', 'Salmon Sashimi']
    },
    {
        cat: 'International Buffet',
        name: 'Copper Beyond Buffet',
        desc: 'บุฟเฟ่ต์นานาชาติพรีเมียมอันดับ 1 ของไทย คุ้มค่าที่สุด (The Sense ปิ่นเกล้า)',
        lat: 13.7798151, lng: 100.4750035,
        cover: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
        interior: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
        menuImgs: ['https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=400&q=80'],
        menuNames: ['Truffle Soup with Croissant', 'Wagyu Beef Steak', 'Sushi Premium Set']
    },
    {
        cat: 'Street Food',
        name: 'เจ๊ไฝ (Jay Fai)',
        desc: 'สตรีทฟู้ดระดับมิชลินสตาร์แห่งเดียวในกรุงเทพฯ ขึ้นชื่อเรื่องไข่เจียวปูเนื้อแน่นชิ้นโตๆ (ประตูผี)',
        lat: 13.7525912, lng: 100.5048189,
        cover: 'https://images.unsplash.com/photo-1626804475297-41609ea064eb?auto=format&fit=crop&w=800&q=80',
        interior: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&w=800&q=80',
        menuImgs: ['https://images.unsplash.com/photo-1556040220-4096d522378d?auto=format&fit=crop&w=400&q=80'],
        menuNames: ['ไข่เจียวปู', 'ต้มยำกุ้งแม่น้ำ', 'ผัดขี้เมาทะเล']
    },
    {
        cat: 'Thai Seafood',
        name: 'สมศักดิ์ปูอบ (เจริญรัถ)',
        desc: 'ตำนานกุ้งอบวุ้นเส้น ปูอบวุ้นเส้น ย่านเจริญรัถ',
        lat: 13.7254463, lng: 100.4954363,
        cover: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
        interior: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
        menuImgs: ['https://images.unsplash.com/photo-1625937759400-0e12d8a0f9bf?auto=format&fit=crop&w=400&q=80'],
        menuNames: ['กุ้งอบวุ้นเส้น', 'ปูไข่อบวุ้นเส้น', 'หอยแครงลวก']
    }
];

// 🌟 ตัวช่วยสุ่มราคาแบบสมจริง (ไม่เอาทศนิยมมั่วๆ)
const realisticPrices = [59, 69, 89, 99, 120, 150, 180, 199, 250, 299, 350, 399, 450, 599, 890];
const getRealisticPrice = () => realisticPrices[Math.floor(Math.random() * realisticPrices.length)];

async function main() {
    console.log('🌱 กำลังเริ่มทำ Seeding ชุดใหญ่ 100 ร้านค้า พร้อมราคาสมจริง ...');

    // 1. เคลียร์ข้อมูลเก่าทิ้งให้เกลี้ยง
    await prisma.chatMessage.deleteMany();
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

    // 2. สร้าง Users (100 คน) เพื่อรองรับ 100 ร้าน
    const users = [];
    for (let i = 1; i <= 100; i++) {
        const role = i === 1 ? 'ADMIN' : (i <= 20 ? 'OWNER' : 'USER');
        const user = await prisma.user.create({
            data: {
                email: i === 1 ? 'admin@wongnork.com' : `user${i}@example.com`,
                password: hashedPassword,
                name: i === 1 ? 'Admin Master' : `User Name ${i}`,
                role: role,
                avatarUrl: `https://i.pravatar.cc/150?u=${i + 200}`,
                provider: 'LOCAL',
                isVerified: true
            }
        });
        users.push(user);
    }
    console.log(`👤 สร้างข้อมูล User สำเร็จ ${users.length} คน`);

    // 3. สร้าง Restaurants (สร้าง 100 ร้าน)
    const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
    const categories = ['Shabu', 'Cafe', 'Japanese', 'BBQ', 'Thai', 'Western', 'Izakaya', 'Dessert', 'Street Food', 'Fine Dining'];
    const restaurants = [];

    for (let i = 0; i < 100; i++) {
        const owner = users[Math.floor(Math.random() * 20)]; // ดึงจาก 20 คนแรกที่เป็น OWNER
        let restData;
        let menuData;

        if (i < realBangkokRestaurants.length) {
            const baseRest = realBangkokRestaurants[i];
            restData = {
                name: baseRest.name,
                description: baseRest.desc,
                lat: baseRest.lat,
                lng: baseRest.lng,
                category: baseRest.cat,
                ownerId: owner.id,
                images: {
                    create: [
                        { url: baseRest.cover, isCover: true },
                        { url: baseRest.interior, isCover: false }
                    ]
                },
                operatingHours: {
                    create: days.map(day => ({
                        day: day,
                        openTime: "10:00",
                        closeTime: "22:00",
                        isClosed: false
                    }))
                }
            };
            
            if (baseRest.exactMenus) {
                menuData = baseRest.exactMenus.map((m, j) => ({
                    name: m.name,
                    description: `เมนูเด็ดแซ่บนัว อร่อยถูกใจแน่นอน`,
                    price: m.price,
                    category: j < 3 ? 'Recommend' : 'General',
                    imageUrl: m.img
                }));
            } else {
                menuData = Array.from({ length: 6 }).map((_, j) => ({
                    name: baseRest.menuNames[j % baseRest.menuNames.length] + (j >= 3 ? ` (พิเศษ)` : ''),
                    description: `เมนูแนะนำ สดใหม่ทุกวัน จัดเต็มระดับพรีเมียม`,
                    price: getRealisticPrice(),
                    category: j < 2 ? 'Recommend' : 'General',
                    imageUrl: baseRest.menuImgs[j % baseRest.menuImgs.length]
                }));
            }
        } else {
            restData = {
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
                }
            };
            menuData = Array.from({ length: 8 }).map((_, j) => ({
                name: `เมนู ${j + 1} ของร้าน ${i}`,
                description: `รายละเอียดเมนูแสนอร่อยลำดับที่ ${j + 1}`,
                price: 80 + (Math.random() * 800),
                category: j < 2 ? 'Recommend' : 'General',
                imageUrl: `https://picsum.photos/seed/menu${i}-${j}/400/300`
            }));
        }

        const restaurant = await prisma.restaurant.create({
            data: {
                ...restData,
                menus: {
                    create: menuData
                }
            },
            include: { menus: true }
        });
        restaurants.push(restaurant);
    }
    console.log(`🍲 สร้างข้อมูลร้านอาหาร สำเร็จ ${restaurants.length} ร้าน (ราคาสมจริงเป๊ะๆ)`);

    // 4. สร้าง Parties (100 ปาร์ตี้)
    const partyStatuses = ['OPEN', 'FULL', 'COMPLETED'];
    const parties = [];

    for (let i = 1; i <= 100; i++) {
        const restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
        const leader = users[Math.floor(Math.random() * users.length)];
        const meetupTime = new Date();

        const status = partyStatuses[i % 3];
        if (status === 'COMPLETED') {
            meetupTime.setDate(meetupTime.getDate() - (1 + Math.floor(Math.random() * 10)));
        } else {
            meetupTime.setDate(meetupTime.getDate() + (1 + Math.floor(Math.random() * 10)));
        }

        const party = await prisma.party.create({
            data: {
                name: `หาตี้กิน ${restaurant.name}`,
                details: `อยากไปจัดร้านนี้มากครับ หารเท่ากันทุกคน ใครสะดวกทักไลน์มาเลย!`,
                meetupTime: meetupTime,
                maxParticipants: 4 + Math.floor(Math.random() * 6),
                contactInfo: `Line: wognork_party_${i}`,
                status: status,
                serviceCharge: getRealisticPrice() / 2, // สุ่ม service charge สมจริง
                vat: 0,
                restaurantId: restaurant.id,
                leaderId: leader.id
            }
        });
        parties.push(party);

        // Leader เป็น Member เสมอ
        await prisma.partyMember.create({ data: { partyId: party.id, userId: leader.id } });

        // เพิ่มสมาชิก 2-5 คน
        const memberCount = 2 + Math.floor(Math.random() * 4);
        const potentialMembers = users.filter(u => u.id !== leader.id).sort(() => 0.5 - Math.random()).slice(0, memberCount);

        const members = [];
        for (const u of potentialMembers) {
            const m = await prisma.partyMember.create({ data: { partyId: party.id, userId: u.id } });
            members.push(m);
        }

        // 🌟 ระบบ Split Bill: สั่งอาหาร
        const orderItemCount = 3 + Math.floor(Math.random() * 3);
        for (let k = 0; k < orderItemCount; k++) {
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

            const allPartyUsers = [leader, ...potentialMembers];
            const sharerCount = 1 + Math.floor(Math.random() * allPartyUsers.length);
            const shuffledUsers = allPartyUsers.sort(() => 0.5 - Math.random()).slice(0, sharerCount);

            for (const sharer of shuffledUsers) {
                await prisma.partyOrderItemSharer.create({
                    data: { partyOrderItemId: orderItem.id, userId: sharer.id }
                });
            }
        }

        // Custom Item (ค่าเครื่องดื่ม) - ราคาดื่มแบบกลมๆ
        const drinkPrices = [150, 199, 250, 300, 500];
        const customItem = await prisma.partyOrderItem.create({
            data: {
                partyId: party.id,
                addedById: leader.id,
                isCustom: true,
                name: 'ค่าเครื่องดื่มพิเศษ / เปิดขวด',
                price: drinkPrices[Math.floor(Math.random() * drinkPrices.length)],
                quantity: 1
            }
        });
        const allPartyUsers = [leader, ...potentialMembers];
        for (const u of allPartyUsers) {
            await prisma.partyOrderItemSharer.create({
                data: { partyOrderItemId: customItem.id, userId: u.id }
            });
        }
    }
    console.log(`🎉 สร้างข้อมูล Party สำเร็จ ${parties.length} ปาร์ตี้`);

    // 5. สร้าง Reviews (100 รายการ)
    for (let i = 1; i <= 100; i++) {
        const user = users[Math.floor(Math.random() * users.length)];
        const restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
        await prisma.review.create({
            data: {
                rating: 3 + Math.floor(Math.random() * 3), // 3-5 ดาว
                comment: `ร้าน ${restaurant.name} ของเค้าดีจริงครับ รูปตรงปก รสชาติอร่อย บรรยากาศเริ่ด!`,
                userId: user.id,
                restaurantId: restaurant.id
            }
        });
    }
    console.log(`⭐ สร้างข้อมูล Review สำเร็จ`);

    // 6. สร้าง SavedRestaurants (100 รายการ)
    for (let i = 1; i <= 100; i++) {
        const user = users[Math.floor(Math.random() * users.length)];
        const restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
        try {
            await prisma.savedRestaurant.create({
                data: { userId: user.id, restaurantId: restaurant.id }
            });
        } catch (e) { } // ข้ามถ้าเซฟซ้ำ
    }
    console.log(`📌 สร้างข้อมูล Saved Restaurant สำเร็จ`);

    console.log('✅ Seeding 100 ร้านแบบราคาสมจริง เสร็จสมบูรณ์! 🚀');
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