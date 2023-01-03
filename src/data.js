let data = [
    {
        id:0,
        title:"펫 소 시크 Retractable dog leash 자동 리드줄 - Bon Voyage",
        contents:"내용",
        price:"55,000원"
    },
    {
        id:1,
        title:"맥스본 Curly Knit Jumper 컬리 니트 점퍼 - Sand 샌드",
        contents:"내용",
        price:"82,000원"
    },
    {
        id:2,
        title:"맥스본 Christian Cowan x max-bone Jumper 크리스찬 코완 x 맥스본 점퍼 - Mint 민트",
        contents:"내용",
        price:"138,000원"
    },
    {
        id:3,
        title:"밀크앤페퍼 TORTUE Toy 거북이 강아지 장난감",
        contents:"내용",
        price:"17,500원"
    }
]

let data_all = [
    {
        id:0,
        title:"맥스본 Christian Cowan x max-bone Jumper 크리스찬 코완 x 맥스본 점퍼 - Mint 민트",
        brand:"BRAND : MILK & PEPPER",
        price:"166,500원",
        tag:"#패션 #큐티 #헐리우드 #깃털 #니트 #귀여운 #블루 #하늘색 #겨울"
    },
    {
        id:1,
        title:"밀크앤페퍼 Lasso Lead 라쏘 일체형리드줄",
        brand:"BRAND : MAXBONE",
        price:"54,000원",
        tag:"#클래식 #가죽 #프랑스 #리드줄"
    },
    {
        id:2,
        title:"밀크앤페퍼 NANOUK SAC Rose Fourrure écrue 나눅 핑크 이동가방",
        brand:"BRAND : MILK & PEPPER",
        price:"134,000원",
        tag:"#프랑스 #인조퍼 #이동가방"
    },
    {
        id:3,
        title:"밀크앤페퍼 NANOUK SAC Noir Fourrure 나눅 블랙 이동가방",
        brand:"BRAND : MILK & PEPPER",
        price:"134,000원",
        tag:"#프랑스 #인조퍼 #이동가방"
    },
    {
        id:4,
        title:"밀크앤페퍼 ZELIE Raincoat Rouge 제리 레인코트 하트",
        brand:"BRAND : MILK & PEPPER",
        price:"74,000원",
        tag:"#귀여운 #우비 #비옷 #레인코트 #후드"
    },
    {
        id:5,
        title:"밀크앤페퍼 ADELE Raincoat Gris 아델 레인코트 골드 도트",
        brand:"BRAND : MILK & PEPPER",
        price:"82,500원",
        tag:"#귀여운 #우비 #비옷 #레인코트 #후드"
    },
    {
        id:6,
        title:"밀크앤페퍼 ELOUAN Raincoat Marine 엘루안 레인코트 마린",
        brand:"BRAND : MILK & PEPPER",
        price:"74,000원",
        tag:"#귀여운 #우비 #비옷 #레인코트 #후드"
    },
    {
        id:7,
        title:"밀크앤페퍼 ISAAC Palmier Bleu-Vert 이삭 그린 야자수 레인코트",
        brand:"BRAND : MILK & PEPPER",
        price:"82,500원",
        tag:"#귀여운 #우비 #비옷 #레인코트 #후드"
    },
    {
        id:8,
        title:"밀크앤페퍼 LEONIE Sweat Rose 레오니 체리 후디",
        brand:"BRAND : MILK & PEPPER",
        price:"78,500원",
        tag:"#귀여운 #실용성 #유니크 #후디"
    },
    {
        id:9,
        title:"맥스본 Weather Ready Parka Pink 웨더 레디 파카 핑크",
        brand:"BRAND : MAXBONE",
        price:"142,500원",
        tag:"#핑크 #우비 #비옷 #여름 #장마 #레인코트 #레드 #후드"
    },
    {
        id:10,
        title:"맥스본 Weather Ready Parka teal 웨더 레디 파카 청록",
        brand:"BRAND : MAXBONE",
        price:"142,500원",
        tag:"#핑크 #우비 #비옷 #여름 #장마 #레인코트 #그린 #후드"
    },
    {
        id:11,
        title:"맥스본 Arabella Vest Pink 아라벨라 패딩 조끼 핑크",
        brand:"BRAND : MAXBONE",
        price:"175,500원",
        tag:"#강아지패딩 #펄핑크 #강아지옷"
    },
    {
        id:12,
        title:"맥스본 Arabella Vest Sand 아라벨라 패딩 조끼 샌드",
        brand:"BRAND : MAXBONE",
        price:"175,500원",
        tag:"#강아지패딩 #펄핑크 #강아지옷"
    },
    {
        id:13,
        title:"밀크앤페퍼 FLAMAND 플라밍고 강아지 장난감",
        brand:"BRAND : MILK & PEPPER",
        price:"17,500원",
        tag:"#귀여운 #프랑스 #동물모양 #인형 #장난감 #삑삑이"
    },
    {
        id:14,
        title:"밀크앤페퍼 PERROQUET 앵무새 강아지 장난감",
        brand:"BRAND : MILK & PEPPER",
        price:"17,500원",
        tag:"#귀여운 #프랑스 #동물모양 #인형 #장난감 #삑삑이"
    },
    {
        id:15,
        title:"밀크앤페퍼 TORTUE Toy 거북이 강아지 장난감",
        brand:"BRAND : MILK & PEPPER",
        price:"17,500원",
        tag:"#귀여운 #프랑스 #동물모양 #인형 #장난감 #삑삑이"
    },
    {
        id:16,
        title:"밀크앤페퍼 POULPE Toy 오징어 고양이 장난감",
        brand:"BRAND : MILK & PEPPER",
        price:"17,500원",
        tag:"#귀여운 #프랑스 #동물모양 #인형 #장난감 #삑삑이"
    },
    {
        id:17,
        title:"밀크앤페퍼 POISSON Toy 물고기 고양이 장난감",
        brand:"BRAND : MILK & PEPPER",
        price:"17,500원",
        tag:"#귀여운 #프랑스 #동물모양 #인형 #장난감 #삑삑이"
    },
    {
        id:18,
        title:"밀크앤페퍼 GIRAFE Dog Toy 기린 강아지 장난감",
        brand:"BRAND : MILK & PEPPER",
        price:"17,500원",
        tag:"#귀여운 #프랑스 #동물모양 #인형 #장난감 #삑삑이"
    },
    {
        id:19,
        title:"밀크앤페퍼_ELEPHANT Dog Toy (코끼리 강아지 장난감)",
        brand:"BRAND : MILK & PEPPER",
        price:"17,500원",
        tag:"#귀여운 #프랑스 #동물모양 #인형 #장난감 #삑삑이"
    }
]

export {data, data_all}