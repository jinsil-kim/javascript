const data = [
  {
    _id: "57171f12e207df2709f1c066",
    title: "청담이든소아청소년과의원",
    address: "서울특별시 강남구 역삼동 719-6 태왕빌딩",
    roadAddress: "서울 강남구 테헤란로 226 (태왕빌딩) 1층",
    position: {
      lat: 37.5017653,
      lng: 127.0411138,
    },
    tel: "02-515-1131",
    telReal: "02-515-1131",
    categories: [
      {
        _id: "57075ae27f6a8e4c08712b93",
        name: "소아청소년과",
        fullName: "소아청소년과",
      },
      {
        _id: "56825965623126030012407a",
        fullName: "내과",
        name: "내과",
      },
      {
        _id: "56a1d6f049bf220300281acf",
        fullName: "이비인후과",
        name: "이비인후과",
      },
      {
        _id: "54b95eb302e5ff3b1fab4d3f",
        fullName: "피부과",
        name: "피부과",
      },
    ],
    createdAt: "2016-04-20T05:54:55.502Z",
    updatedAt: "2024-08-05T05:20:12.298Z",
    active: true,
    theme: {
      features: [
        {
          _id: "5ae96cfa1fd1b3023f9ed24c",
          title: "영유아검진",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_kid_examination.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description:
            "영유아의 검진에 필요한 의료진 및 시설을 갖춘 의료기관입니다.",
          index: 0,
          highlighting: true,
        },
        {
          _id: "5f336784d199082548440e07",
          title: "주차장",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 2,
          highlighting: true,
        },
        {
          _id: "64129eb79ced91389ae13767",
          title: "로타백신무료접종",
          index: 4,
          highlighting: true,
          description: null,
        },
        {
          _id: "5eba4d5dd6705b1077c309ed",
          title: "예방접종",
          image: {
            url: "https://testcdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_telemedicine.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description: "(임시) 예방접종",
          index: 7,
          highlighting: false,
        },
        {
          _id: "5f336784d199082548440e08",
          title: "전문의",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 8,
          highlighting: false,
        },
      ],
      specialities: [],
    },
    serviceType: [
      "RECEIPT",
      "RESERVATION",
      "SELF_DESK",
      "KIOSK",
      "WAITINGS",
      "EXAMINATION_INFANTS",
      "PAPER",
    ],
    schedules: [
      {
        startTime: "09:00",
        endTime: "21:00",
        night: true,
        day: "monday",
      },
      {
        startTime: "09:00",
        endTime: "18:00",
        night: false,
        day: "tuesday",
      },
      {
        startTime: "09:00",
        endTime: "21:00",
        night: true,
        day: "wednesday",
      },
      {
        startTime: "09:00",
        endTime: "18:00",
        night: false,
        day: "thursday",
      },
      {
        startTime: "09:00",
        endTime: "18:00",
        night: false,
        day: "friday",
      },
      {
        startTime: "09:00",
        endTime: "14:00",
        night: false,
        day: "saturday",
      },
      {
        startTime: "09:00",
        endTime: "14:00",
        night: false,
        day: "sunday",
      },
      {
        startTime: "09:00",
        endTime: "14:00",
        night: false,
        day: "holiday",
      },
      {
        startTime: "13:00",
        endTime: "14:00",
        night: false,
        day: "lunch",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "dinner",
      },
    ],
    useReceptionServiceRequest: true,
    mainDepartment: {
      _id: "57075ae27f6a8e4c08712b93",
      name: "소아청소년과",
      fullName: "소아청소년과",
    },
    isReceipt: true,
    isReservation: true,
    isRealReceipt: true,
    isRealReservation: true,
    holiday: false,
    open: true,
    bCodeAddress: "서울특별시 강남구 역삼동",
    dateQuery: "2024-08-05",
    useTelemedicine: false,
    medicalBills: null,
    reservationUnitKey: ["진료실1", "진료실2"],
    isReservationSchedule: true,
    serviceBadges: [
      {
        _id: "6215cc51cae0652290c66d99",
        index: 0,
        type: "RECEIPT",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reception-2.png",
          size: {
            width: 140,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9a",
        index: 1,
        type: "RESERVATION",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reservation-2.png",
          size: {
            width: 144,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9d",
        index: 5,
        type: "PAPER",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/paper-2.png",
          size: {
            width: 262,
            height: 48,
          },
        },
        active: true,
      },
    ],
    treatment: {
      waitCountOption: "WAIT_COUNT",
      treatWaiting: 0,
      avgWaitTime: 0,
    },
    symptomList: [
      {
        _id: "5b323f20421b7443b4fd7995",
        name: "일반진료",
        systemDefault: false,
      },
    ],
  },
  {
    _id: "5c5d39760f851a000fb71ade",
    title: "연세휴가정의학과의원",
    address: "서울 서초구 서초동 1755-1 리더스원 상가 3층 302호 (서초동)",
    roadAddress: "서울 서초구 사임당로 158 리더스원 상가 3층 302호 (서초동)",
    position: {
      lat: 37.49184,
      lng: 127.0276661,
    },
    tel: "02-3472-7582",
    telReal: "02-3472-7582",
    categories: [
      {
        _id: "57075ae07f6a8e4c08712b90",
        name: "가정의학과",
        fullName: "가정의학과",
      },
      {
        _id: "56825965623126030012407a",
        fullName: "내과",
        name: "내과",
      },
      {
        _id: "57075ae27f6a8e4c08712b93",
        name: "소아청소년과",
        fullName: "소아청소년과",
      },
      {
        _id: "54b95eb302e5ff3b1fab4d3f",
        fullName: "피부과",
        name: "피부과",
      },
      {
        _id: "57075ae77f6a8e4c08712b9b",
        name: "일반의원",
        fullName: "일반의원",
      },
      {
        _id: "56a1d6f049bf220300281acf",
        fullName: "이비인후과",
        name: "이비인후과",
      },
      {
        _id: "563c3f616bd6810300a57547",
        fullName: "비뇨기과",
        name: "비뇨기과",
      },
      {
        _id: "57075ae47f6a8e4c08712b96",
        name: "진단검사의학과",
        fullName: "진단검사의학과",
      },
    ],
    createdAt: "2020-03-27T09:31:28.772Z",
    updatedAt: "2024-08-05T05:15:12.361Z",
    active: true,
    theme: {
      features: [
        {
          _id: "5f336784d199082548440e07",
          title: "주차장",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 2,
          highlighting: true,
        },
        {
          _id: "5eba4d5dd6705b1077c309ed",
          title: "예방접종",
          image: {
            url: "https://testcdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_telemedicine.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description: "(임시) 예방접종",
          index: 7,
          highlighting: false,
        },
        {
          _id: "5f336784d199082548440e08",
          title: "전문의",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 8,
          highlighting: false,
        },
        {
          _id: "59264df251111a11415bee2c",
          title: "건강검진",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_examination.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description: "건강검진 진료 서비스를 제공하는 병원입니다.",
          index: 10,
          highlighting: false,
        },
      ],
      specialities: [],
    },
    serviceType: ["RECEIPT", "RESERVATION", "KIOSK", "WAITINGS", "PAPER"],
    schedules: [
      {
        startTime: "08:00",
        endTime: "22:00",
        night: true,
        day: "monday",
      },
      {
        startTime: "08:00",
        endTime: "22:00",
        night: true,
        day: "tuesday",
      },
      {
        startTime: "08:00",
        endTime: "22:00",
        night: true,
        day: "wednesday",
      },
      {
        startTime: "08:00",
        endTime: "22:00",
        night: true,
        day: "thursday",
      },
      {
        startTime: "08:00",
        endTime: "22:00",
        night: true,
        day: "friday",
      },
      {
        startTime: "08:00",
        endTime: "22:00",
        night: true,
        day: "saturday",
      },
      {
        startTime: "08:00",
        endTime: "22:00",
        night: true,
        day: "sunday",
      },
      {
        startTime: "08:00",
        endTime: "22:00",
        night: true,
        day: "holiday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "lunch",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "dinner",
      },
    ],
    useReceptionServiceRequest: true,
    mainDepartment: {
      _id: "57075ae07f6a8e4c08712b90",
      name: "가정의학과",
      fullName: "가정의학과",
    },
    isReceipt: true,
    isReservation: true,
    isRealReceipt: true,
    isRealReservation: true,
    holiday: false,
    open: true,
    bCodeAddress: "서울특별시 서초구 서초동",
    dateQuery: "2024-08-05",
    useTelemedicine: false,
    medicalBills: null,
    reservationUnitKey: ["2진료실", "1진료실", "3진료실"],
    isReservationSchedule: true,
    serviceBadges: [
      {
        _id: "6215cc51cae0652290c66d99",
        index: 0,
        type: "RECEIPT",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reception-2.png",
          size: {
            width: 140,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9a",
        index: 1,
        type: "RESERVATION",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reservation-2.png",
          size: {
            width: 144,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9d",
        index: 5,
        type: "PAPER",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/paper-2.png",
          size: {
            width: 262,
            height: 48,
          },
        },
        active: true,
      },
    ],
    treatment: {
      waitCountOption: "WAIT_COUNT",
      treatWaiting: 3,
      avgWaitTime: 0,
    },
    symptomList: [
      {
        _id: "611df16d56019b01c8b22b9c",
        name: "※검사결과 상담진료",
        systemDefault: false,
      },
      {
        _id: "5d83220eab05b10013bf3e38",
        name: "감기",
        systemDefault: false,
      },
      {
        _id: "5d4a7f127af7a10011805a09",
        name: "검사",
        systemDefault: false,
      },
      {
        _id: "5b613a52937e6b6005bd5945",
        name: "결과상담",
        systemDefault: false,
      },
      {
        _id: "5b323f20421b7443b4fd79aa",
        name: "관절질환",
        systemDefault: false,
      },
      {
        _id: "5b5e907b969a704a42f5eba8",
        name: "미용시술",
        systemDefault: false,
      },
      {
        _id: "5d43f561ff0e850011433647",
        name: "비만",
        systemDefault: false,
      },
      {
        _id: "5c8efe32320b920011f962a6",
        name: "서류",
        systemDefault: false,
      },
      {
        _id: "5cc283e9fef0be001039490f",
        name: "성장클리닉",
        systemDefault: false,
      },
      {
        _id: "5c76677a73fce80012429a7b",
        name: "소아진료",
        systemDefault: false,
      },
      {
        _id: "5e4a2dcbed68c1001ac3a654",
        name: "소화기내과",
        systemDefault: false,
      },
      {
        _id: "5bc94add7a1f300e30372fa6",
        name: "수액",
        systemDefault: false,
      },
      {
        _id: "5b6a8e45d2004e6a6f73f8a4",
        name: "약처방",
        systemDefault: false,
      },
      {
        _id: "5b3acfa74df0a35f8e365c77",
        name: "예방접종",
        systemDefault: false,
      },
      {
        _id: "5b323f20421b7443b4fd7995",
        name: "일반진료",
        systemDefault: false,
      },
      {
        _id: "5b47009dca6a8a4c38d26993",
        name: "정기검진",
        systemDefault: false,
      },
      {
        _id: "5b323f20421b7443b4fd79a3",
        name: "피부질환",
        systemDefault: false,
      },
    ],
  },
  {
    _id: "57171f12e207df2709f1c441",
    title: "서초서울삼성내과의원",
    address: "서울 서초구 서초동 1598-1 큐브플러스 2층 201호",
    roadAddress: "서울특별시 서초구 사임당로 38 큐브플러스 2층 201호",
    position: {
      lat: 37.4880381,
      lng: 127.01423350000005,
    },
    tel: "02-584-7751",
    telReal: "02-584-7751",
    categories: [
      {
        _id: "56825965623126030012407a",
        fullName: "내과",
        name: "내과",
      },
      {
        _id: "56a1d6f049bf220300281acf",
        fullName: "이비인후과",
        name: "이비인후과",
      },
    ],
    createdAt: "2016-04-20T05:54:55.521Z",
    updatedAt: "2024-08-05T04:50:12.219Z",
    active: true,
    theme: {
      features: [
        {
          _id: "5f336784d199082548440e07",
          title: "주차장",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 2,
          highlighting: true,
        },
        {
          _id: "5eba4d5dd6705b1077c309ed",
          title: "예방접종",
          image: {
            url: "https://testcdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_telemedicine.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description: "(임시) 예방접종",
          index: 7,
          highlighting: false,
        },
        {
          _id: "5f336784d199082548440e08",
          title: "전문의",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 8,
          highlighting: false,
        },
      ],
      specialities: [],
    },
    serviceType: ["RECEIPT", "RESERVATION", "SELF_DESK", "WAITINGS", "PAPER"],
    schedules: [
      {
        startTime: "09:00",
        endTime: "18:30",
        night: false,
        day: "monday",
      },
      {
        startTime: "09:00",
        endTime: "18:30",
        night: false,
        day: "tuesday",
      },
      {
        startTime: "09:00",
        endTime: "18:30",
        night: false,
        day: "wednesday",
      },
      {
        startTime: "09:00",
        endTime: "18:30",
        night: false,
        day: "thursday",
      },
      {
        startTime: "09:00",
        endTime: "18:30",
        night: false,
        day: "friday",
      },
      {
        startTime: "09:00",
        endTime: "13:00",
        night: false,
        day: "saturday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "sunday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "holiday",
      },
      {
        startTime: "13:00",
        endTime: "14:00",
        night: false,
        day: "lunch",
      },
      {
        startTime: "18:30",
        endTime: "19:30",
        night: false,
        day: "dinner",
      },
    ],
    useReceptionServiceRequest: true,
    mainDepartment: {
      _id: "56825965623126030012407a",
      fullName: "내과",
      name: "내과",
    },
    isReceipt: true,
    isReservation: true,
    isRealReceipt: true,
    isRealReservation: true,
    holiday: false,
    open: true,
    bCodeAddress: "서울특별시 서초구 서초동",
    dateQuery: "2024-08-05",
    useTelemedicine: false,
    medicalBills: null,
    reservationUnitKey: ["진료실"],
    isReservationSchedule: true,
    serviceBadges: [
      {
        _id: "6215cc51cae0652290c66d99",
        index: 0,
        type: "RECEIPT",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reception-2.png",
          size: {
            width: 140,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9a",
        index: 1,
        type: "RESERVATION",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reservation-2.png",
          size: {
            width: 144,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9d",
        index: 5,
        type: "PAPER",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/paper-2.png",
          size: {
            width: 262,
            height: 48,
          },
        },
        active: true,
      },
    ],
    treatment: {
      waitCountOption: "WAIT_COUNT",
      treatWaiting: 2,
      avgWaitTime: 0,
    },
    symptomList: [
      {
        _id: "5d83220eab05b10013bf3e38",
        name: "감기",
        systemDefault: false,
      },
      {
        _id: "5b323f20421b7443b4fd79b1",
        name: "갑상선질환",
        systemDefault: false,
      },
      {
        _id: "5b613a52937e6b6005bd5945",
        name: "결과상담",
        systemDefault: false,
      },
      {
        _id: "5bb19195ea0cd90f44fa4ff4",
        name: "공단검진",
        systemDefault: false,
      },
      {
        _id: "5f68754afe608c0018ef5a55",
        name: "내시경검사",
        systemDefault: false,
      },
      {
        _id: "5d43e0efff0e850011433644",
        name: "당뇨",
        systemDefault: false,
      },
      {
        _id: "5bc94add7a1f300e30372fa6",
        name: "수액",
        systemDefault: false,
      },
      {
        _id: "640811eaede6d10007f42a3b",
        name: "알레르기 검사",
        systemDefault: false,
      },
      {
        _id: "5b3acfa74df0a35f8e365c77",
        name: "예방접종",
        systemDefault: false,
      },
      {
        _id: "5b323f20421b7443b4fd7995",
        name: "일반진료",
        systemDefault: false,
      },
      {
        _id: "5f68754f4e98b7001d86a9a2",
        name: "초음파검사",
        systemDefault: false,
      },
      {
        _id: "5d3fe120e940b52888f612a2",
        name: "혈액검사",
        systemDefault: false,
      },
    ],
  },
  {
    _id: "664aa6c325ade7532019d30d",
    title: "아토앤맘소아청소년과의원",
    mainDepartment: {
      _id: "57075ae27f6a8e4c08712b93",
      name: "소아청소년과",
      fullName: "소아청소년과",
    },
    address: "서울특별시 강남구 선릉로 669, 상경빌딩 2층 (논현동)",
    roadAddress: "서울특별시 강남구 선릉로 669, 상경빌딩 2층 (논현동)",
    position: {
      lat: 37.516607,
      lng: 127.041255,
    },
    tel: "02-543-1243",
    telReal: "02-543-1243",
    categories: [
      {
        _id: "57075ae27f6a8e4c08712b93",
        name: "소아청소년과",
        fullName: "소아청소년과",
      },
    ],
    active: true,
    theme: {
      features: [],
      specialities: [],
    },
    serviceType: [
      "RECEIPT",
      "RESERVATION",
      "WAITINGS",
      "EXAMINATION_INFANTS",
      "PAPER",
    ],
    schedules: [
      {
        startTime: "09:00",
        endTime: "18:30",
        night: false,
        day: "monday",
      },
      {
        startTime: "09:00",
        endTime: "18:30",
        night: false,
        day: "tuesday",
      },
      {
        startTime: "09:00",
        endTime: "18:30",
        night: false,
        day: "wednesday",
      },
      {
        startTime: "09:00",
        endTime: "18:30",
        night: false,
        day: "thursday",
      },
      {
        startTime: "09:00",
        endTime: "18:30",
        night: false,
        day: "friday",
      },
      {
        startTime: "09:00",
        endTime: "13:30",
        night: false,
        day: "saturday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "sunday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "holiday",
      },
      {
        startTime: "13:00",
        endTime: "14:00",
        night: false,
        day: "lunch",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "dinner",
      },
    ],
    useReceptionServiceRequest: true,
    createdAt: "2024-05-20T01:26:29.943Z",
    updatedAt: "2024-08-05T05:15:12.378Z",
    isReceipt: true,
    isReservation: true,
    isRealReceipt: true,
    isRealReservation: true,
    holiday: false,
    open: true,
    bCodeAddress: "서울특별시 강남구 논현동",
    dateQuery: "2024-08-05",
    useTelemedicine: false,
    medicalBills: null,
    reservationUnitKey: ["1진료실"],
    isReservationSchedule: true,
    serviceBadges: [
      {
        _id: "6215cc51cae0652290c66d99",
        index: 0,
        type: "RECEIPT",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reception-2.png",
          size: {
            width: 140,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9a",
        index: 1,
        type: "RESERVATION",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reservation-2.png",
          size: {
            width: 144,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9d",
        index: 5,
        type: "PAPER",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/paper-2.png",
          size: {
            width: 262,
            height: 48,
          },
        },
        active: true,
      },
    ],
    treatment: {
      waitCountOption: "WAIT_COUNT",
      treatWaiting: 2,
      avgWaitTime: 3,
    },
    symptomList: [
      {
        _id: "62020992bb666f1a73597326",
        name: "※신속항원검사",
        systemDefault: false,
      },
      {
        _id: "5bc94add7a1f300e30372fa6",
        name: "수액",
        systemDefault: false,
      },
      {
        _id: "5f98f171a2ddf3001140915a",
        name: "알레르기 클리닉",
        systemDefault: false,
      },
      {
        _id: "5b3acfa74df0a35f8e365c77",
        name: "예방접종",
        systemDefault: false,
      },
      {
        _id: "5b323f20421b7443b4fd7995",
        name: "일반진료",
        systemDefault: false,
      },
    ],
  },
  {
    _id: "60190bc765be9d001993da81",
    theme: {
      features: [
        {
          _id: "5ae96cfa1fd1b3023f9ed24c",
          title: "영유아검진",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_kid_examination.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description:
            "영유아의 검진에 필요한 의료진 및 시설을 갖춘 의료기관입니다.",
          index: 0,
          highlighting: true,
        },
        {
          _id: "5f336784d199082548440e07",
          title: "주차장",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 2,
          highlighting: true,
        },
        {
          _id: "5f336784d199082548440e08",
          title: "전문의",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 8,
          highlighting: false,
        },
      ],
      specialities: [],
    },
    roadAddress: "서울 서초구 사임당로 158 (리더스원 상가) 3층 306호",
    tel: "02-583-5355",
    telReal: "02-583-5355",
    categories: [
      {
        _id: "56825965623126030012407a",
        fullName: "내과",
        name: "내과",
      },
      {
        _id: "57075ae27f6a8e4c08712b93",
        name: "소아청소년과",
        fullName: "소아청소년과",
      },
      {
        _id: "57075adf7f6a8e4c08712b8e",
        name: "신경과",
        fullName: "신경과",
      },
      {
        _id: "54b95eb302e5ff3b1fab4d3d",
        fullName: "안과",
        name: "안과",
      },
      {
        _id: "56a1d6f049bf220300281acf",
        fullName: "이비인후과",
        name: "이비인후과",
      },
      {
        _id: "56723a471626a703005f8200",
        fullName: "정형외과",
        name: "정형외과",
      },
      {
        _id: "54b95eb302e5ff3b1fab4d3f",
        fullName: "피부과",
        name: "피부과",
      },
      {
        _id: "57075ae07f6a8e4c08712b90",
        name: "가정의학과",
        fullName: "가정의학과",
      },
      {
        _id: "57075adf7f6a8e4c08712b8f",
        name: "정신건강의학과",
        fullName: "정신건강의학과",
      },
      {
        _id: "563c3f616bd6810300a57547",
        fullName: "비뇨기과",
        name: "비뇨기과",
      },
    ],
    active: true,
    serviceType: [
      "RECEIPT",
      "RESERVATION",
      "SELF_DESK",
      "KIOSK",
      "WAITINGS",
      "PAYMENT",
    ],
    useReceptionServiceRequest: true,
    title: "서초아이소아청소년과의원",
    address: "서울특별시 서초구 서초동 1755-1 리더스원 상가",
    position: {
      lat: 37.4918503,
      lng: 127.0271768,
    },
    schedules: [
      {
        startTime: "08:30",
        endTime: "20:00",
        night: false,
        day: "monday",
      },
      {
        startTime: "08:30",
        endTime: "20:00",
        night: false,
        day: "tuesday",
      },
      {
        startTime: "08:30",
        endTime: "20:00",
        night: false,
        day: "wednesday",
      },
      {
        startTime: "08:30",
        endTime: "20:00",
        night: false,
        day: "thursday",
      },
      {
        startTime: "08:30",
        endTime: "20:00",
        night: false,
        day: "friday",
      },
      {
        startTime: "08:30",
        endTime: "14:00",
        night: false,
        day: "saturday",
      },
      {
        startTime: "09:00",
        endTime: "14:00",
        night: false,
        day: "sunday",
      },
      {
        startTime: "09:00",
        endTime: "14:00",
        night: false,
        day: "holiday",
      },
      {
        startTime: "13:00",
        endTime: "14:00",
        night: false,
        day: "lunch",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "dinner",
      },
    ],
    mainDepartment: {
      _id: "57075ae27f6a8e4c08712b93",
      name: "소아청소년과",
      fullName: "소아청소년과",
    },
    createdAt: "2021-02-02T08:22:35.449Z",
    updatedAt: "2024-08-05T05:20:12.298Z",
    isReceipt: true,
    isReservation: true,
    isRealReceipt: true,
    isRealReservation: true,
    holiday: false,
    open: true,
    bCodeAddress: "서울특별시 서초구 서초동",
    dateQuery: "2024-08-05",
    useTelemedicine: false,
    medicalBills: null,
    reservationUnitKey: [],
    isReservationSchedule: false,
    serviceBadges: [
      {
        _id: "6215cc51cae0652290c66d99",
        index: 0,
        type: "RECEIPT",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reception-2.png",
          size: {
            width: 140,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9a",
        index: 1,
        type: "RESERVATION",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reservation-2.png",
          size: {
            width: 144,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9c",
        index: 3,
        type: "PAYMENT",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/payment-2.png",
          size: {
            width: 170,
            height: 48,
          },
        },
        active: true,
      },
    ],
    treatment: {
      waitCountOption: "WAIT_COUNT",
      treatWaiting: 11,
      avgWaitTime: 3,
    },
    symptomList: null,
  },
  {
    _id: "5fc9ba5ff146390014485ccc",
    theme: {
      features: [
        {
          _id: "5ae96cfa1fd1b3023f9ed24c",
          title: "영유아검진",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_kid_examination.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description:
            "영유아의 검진에 필요한 의료진 및 시설을 갖춘 의료기관입니다.",
          index: 0,
          highlighting: true,
        },
        {
          _id: "5f336784d199082548440e07",
          title: "주차장",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 2,
          highlighting: true,
        },
        {
          _id: "64129eb79ced91389ae13767",
          title: "로타백신무료접종",
          index: 4,
          highlighting: true,
          description: null,
        },
        {
          _id: "5eba4d5dd6705b1077c309ed",
          title: "예방접종",
          image: {
            url: "https://testcdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_telemedicine.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description: "(임시) 예방접종",
          index: 7,
          highlighting: false,
        },
        {
          _id: "5f336784d199082548440e08",
          title: "전문의",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 8,
          highlighting: false,
        },
      ],
      specialities: [],
    },
    roadAddress: "서울 서초구 신반포로 257 4층",
    tel: "02-533-7075",
    telReal: "02-533-7075",
    categories: [
      {
        _id: "56825965623126030012407a",
        fullName: "내과",
        name: "내과",
      },
      {
        _id: "56723a471626a703005f8200",
        fullName: "정형외과",
        name: "정형외과",
      },
      {
        _id: "54b95eb302e5ff3b1fab4d3d",
        fullName: "안과",
        name: "안과",
      },
      {
        _id: "56a1d6f049bf220300281acf",
        fullName: "이비인후과",
        name: "이비인후과",
      },
      {
        _id: "54b95eb302e5ff3b1fab4d3f",
        fullName: "피부과",
        name: "피부과",
      },
    ],
    active: true,
    serviceType: ["RECEIPT", "RESERVATION", "SELF_DESK", "KIOSK", "WAITINGS"],
    useReceptionServiceRequest: true,
    title: "반포키즈소아청소년과의원",
    address: "서울 서초구 잠원동 58-24 4층",
    position: {
      lat: 37.50962,
      lng: 127.0132829,
    },
    schedules: [
      {
        startTime: "08:30",
        endTime: "21:00",
        night: true,
        day: "monday",
      },
      {
        startTime: "08:30",
        endTime: "21:00",
        night: true,
        day: "tuesday",
      },
      {
        startTime: "08:30",
        endTime: "21:00",
        night: true,
        day: "wednesday",
      },
      {
        startTime: "08:30",
        endTime: "21:00",
        night: true,
        day: "thursday",
      },
      {
        startTime: "08:30",
        endTime: "21:00",
        night: true,
        day: "friday",
      },
      {
        startTime: "08:30",
        endTime: "13:00",
        night: false,
        day: "saturday",
      },
      {
        startTime: "09:00",
        endTime: "13:00",
        night: false,
        day: "sunday",
      },
      {
        startTime: "09:00",
        endTime: "13:00",
        night: false,
        day: "holiday",
      },
      {
        startTime: "13:00",
        endTime: "14:00",
        night: false,
        day: "lunch",
      },
      {
        startTime: "17:30",
        endTime: "18:00",
        night: false,
        day: "dinner",
      },
    ],
    mainDepartment: {
      _id: "57075ae27f6a8e4c08712b93",
      name: "소아청소년과",
      fullName: "소아청소년과",
    },
    createdAt: "2020-12-04T04:26:14.517Z",
    updatedAt: "2024-08-05T05:20:12.298Z",
    isReceipt: true,
    isReservation: true,
    isRealReceipt: true,
    isRealReservation: true,
    holiday: false,
    open: true,
    bCodeAddress: "서울특별시 서초구 잠원동",
    dateQuery: "2024-08-05",
    useTelemedicine: false,
    medicalBills: null,
    reservationUnitKey: [],
    isReservationSchedule: false,
    serviceBadges: [
      {
        _id: "6215cc51cae0652290c66d99",
        index: 0,
        type: "RECEIPT",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reception-2.png",
          size: {
            width: 140,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9a",
        index: 1,
        type: "RESERVATION",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reservation-2.png",
          size: {
            width: 144,
            height: 48,
          },
        },
        active: true,
      },
    ],
    treatment: {
      waitCountOption: "WAIT_COUNT",
      treatWaiting: 16,
      avgWaitTime: 2,
    },
    symptomList: null,
  },
  {
    _id: "66a6e2779e7aa04b52385bce",
    title: "청담이룸의원",
    mainDepartment: {
      _id: "57075ae07f6a8e4c08712b90",
      name: "가정의학과",
      fullName: "가정의학과",
    },
    address: "서울 강남구 삼성동 70",
    roadAddress: "서울 강남구 삼성로 620 2층",
    position: {
      lat: 37.5149654717602,
      lng: 127.05262341302,
    },
    tel: "02-6949-3652",
    telReal: "02-6949-3652",
    categories: [
      {
        _id: "57075ae07f6a8e4c08712b90",
        name: "가정의학과",
        fullName: "가정의학과",
      },
      {
        _id: "56825965623126030012407a",
        fullName: "내과",
        name: "내과",
      },
      {
        _id: "57075ae27f6a8e4c08712b93",
        name: "소아청소년과",
        fullName: "소아청소년과",
      },
      {
        _id: "56a1d6f049bf220300281acf",
        fullName: "이비인후과",
        name: "이비인후과",
      },
      {
        _id: "54b95eb302e5ff3b1fab4d3f",
        fullName: "피부과",
        name: "피부과",
      },
    ],
    active: true,
    theme: {
      features: [
        {
          _id: "5f336784d199082548440e08",
          title: "전문의",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 8,
          highlighting: false,
        },
      ],
      specialities: [],
    },
    serviceType: ["RECEIPT", "RESERVATION", "SELF_DESK", "WAITINGS", "PAPER"],
    schedules: [
      {
        startTime: "09:00",
        endTime: "20:00",
        night: true,
        day: "monday",
      },
      {
        startTime: "09:00",
        endTime: "20:00",
        night: true,
        day: "tuesday",
      },
      {
        startTime: "09:00",
        endTime: "20:00",
        night: true,
        day: "wednesday",
      },
      {
        startTime: "09:00",
        endTime: "20:00",
        night: true,
        day: "thursday",
      },
      {
        startTime: "09:00",
        endTime: "20:00",
        night: true,
        day: "friday",
      },
      {
        startTime: "09:00",
        endTime: "14:00",
        night: false,
        day: "saturday",
      },
      {
        startTime: "09:00",
        endTime: "14:00",
        night: false,
        day: "sunday",
      },
      {
        startTime: "09:00",
        endTime: "14:00",
        night: false,
        day: "holiday",
      },
      {
        startTime: "13:00",
        endTime: "14:00",
        night: false,
        day: "lunch",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "dinner",
      },
    ],
    useReceptionServiceRequest: null,
    createdAt: "2024-07-29T00:29:47.191Z",
    updatedAt: "2024-08-05T05:15:12.361Z",
    isReceipt: true,
    isReservation: true,
    isRealReceipt: true,
    isRealReservation: true,
    holiday: false,
    open: true,
    bCodeAddress: "서울특별시 강남구 삼성동",
    dateQuery: "2024-08-05",
    useTelemedicine: false,
    medicalBills: null,
    reservationUnitKey: ["1진료실"],
    isReservationSchedule: true,
    serviceBadges: [
      {
        _id: "6215cc51cae0652290c66d99",
        index: 0,
        type: "RECEIPT",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reception-2.png",
          size: {
            width: 140,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9a",
        index: 1,
        type: "RESERVATION",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reservation-2.png",
          size: {
            width: 144,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9d",
        index: 5,
        type: "PAPER",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/paper-2.png",
          size: {
            width: 262,
            height: 48,
          },
        },
        active: true,
      },
    ],
    treatment: {
      waitCountOption: "WAIT_COUNT",
      treatWaiting: 0,
      avgWaitTime: 4,
    },
    symptomList: [
      {
        _id: "5bc94add7a1f300e30372fa6",
        name: "수액",
        systemDefault: false,
      },
    ],
  },
  {
    _id: "5cc63fbdc862b0001080f0d1",
    title: "연세이롬이비인후과의원",
    address: "서울특별시 강남구 논현동 88-7 CL타워 4층 405-407호",
    roadAddress: "서울특별시 강남구 학동로 215 CL타워 4층 405-407호",
    position: {
      lat: 37.5148014,
      lng: 127.03259000000003,
    },
    tel: "02-547-2522",
    telReal: "02-547-2522",
    categories: [
      {
        _id: "56a1d6f049bf220300281acf",
        fullName: "이비인후과",
        name: "이비인후과",
      },
      {
        _id: "57075ae27f6a8e4c08712b93",
        name: "소아청소년과",
        fullName: "소아청소년과",
      },
      {
        _id: "56825965623126030012407a",
        fullName: "내과",
        name: "내과",
      },
    ],
    createdAt: "2020-03-27T09:31:35.728Z",
    updatedAt: "2024-08-05T04:20:12.375Z",
    active: true,
    theme: {
      features: [
        {
          _id: "5f336784d199082548440e07",
          title: "주차장",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 2,
          highlighting: true,
        },
        {
          _id: "5f336784d199082548440e08",
          title: "전문의",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 8,
          highlighting: false,
        },
      ],
      specialities: [],
    },
    serviceType: [
      "RECEIPT",
      "RESERVATION",
      "SELF_DESK",
      "WAITINGS",
      "EXAMINATION_INFANTS",
    ],
    schedules: [
      {
        startTime: "09:00",
        endTime: "19:00",
        night: false,
        day: "monday",
      },
      {
        startTime: "09:00",
        endTime: "19:00",
        night: false,
        day: "tuesday",
      },
      {
        startTime: "09:00",
        endTime: "19:00",
        night: false,
        day: "wednesday",
      },
      {
        startTime: "09:00",
        endTime: "19:00",
        night: false,
        day: "thursday",
      },
      {
        startTime: "09:00",
        endTime: "19:00",
        night: false,
        day: "friday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "saturday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "sunday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "holiday",
      },
      {
        startTime: "13:00",
        endTime: "14:00",
        night: false,
        day: "lunch",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "dinner",
      },
    ],
    useReceptionServiceRequest: true,
    mainDepartment: {
      _id: "56a1d6f049bf220300281acf",
      fullName: "이비인후과",
      name: "이비인후과",
    },
    isReceipt: true,
    isReservation: true,
    isRealReceipt: true,
    isRealReservation: true,
    holiday: false,
    open: true,
    bCodeAddress: "서울특별시 강남구 논현동",
    dateQuery: "2024-08-05",
    useTelemedicine: false,
    medicalBills: null,
    reservationUnitKey: [],
    isReservationSchedule: false,
    serviceBadges: [
      {
        _id: "6215cc51cae0652290c66d99",
        index: 0,
        type: "RECEIPT",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reception-2.png",
          size: {
            width: 140,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9a",
        index: 1,
        type: "RESERVATION",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reservation-2.png",
          size: {
            width: 144,
            height: 48,
          },
        },
        active: true,
      },
    ],
    treatment: {
      waitCountOption: "WAIT_COUNT",
      treatWaiting: 4,
      avgWaitTime: 0,
    },
    symptomList: null,
  },
  {
    _id: "604abf90051f6400184dfe74",
    theme: {
      features: [
        {
          _id: "5f336784d199082548440e08",
          title: "전문의",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 8,
          highlighting: false,
        },
      ],
      specialities: [],
    },
    roadAddress:
      "서울특별시 서초구 사임당로 158 리더스원 상가 5층 504.505,509호 (서초동)",
    tel: "02-6951-1275",
    telReal: "02-6951-1275",
    categories: [
      {
        _id: "56723a471626a703005f8200",
        fullName: "정형외과",
        name: "정형외과",
      },
      {
        _id: "57075ae37f6a8e4c08712b95",
        name: "재활의학과",
        fullName: "재활의학과",
      },
    ],
    active: true,
    serviceType: ["RESERVATION", "WAITINGS"],
    useReceptionServiceRequest: false,
    title: "성모용정형외과의원",
    address:
      "서울특별시 서초구 사임당로 158 리더스원 상가 5층 504.505,509호 (서초동)",
    position: {
      lat: 37.491861,
      lng: 127.027174,
    },
    schedules: [
      {
        startTime: "09:00",
        endTime: "20:00",
        night: true,
        day: "monday",
      },
      {
        startTime: "09:00",
        endTime: "20:00",
        night: true,
        day: "tuesday",
      },
      {
        startTime: "09:00",
        endTime: "20:00",
        night: true,
        day: "wednesday",
      },
      {
        startTime: "09:00",
        endTime: "20:00",
        night: true,
        day: "thursday",
      },
      {
        startTime: "09:00",
        endTime: "20:00",
        night: true,
        day: "friday",
      },
      {
        startTime: "09:00",
        endTime: "14:00",
        night: false,
        day: "saturday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "sunday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "holiday",
      },
      {
        startTime: "13:00",
        endTime: "14:00",
        night: false,
        day: "lunch",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "dinner",
      },
    ],
    mainDepartment: {
      _id: "56723a471626a703005f8200",
      fullName: "정형외과",
      name: "정형외과",
    },
    createdAt: "2021-03-12T01:10:42.120Z",
    updatedAt: "2024-08-04T05:40:12.316Z",
    isReceipt: false,
    isReservation: true,
    isRealReceipt: false,
    isRealReservation: true,
    holiday: false,
    open: true,
    bCodeAddress: "서울특별시 서초구 서초동",
    dateQuery: "2024-08-05",
    useTelemedicine: false,
    medicalBills: null,
    reservationUnitKey: ["OS", "RL"],
    isReservationSchedule: true,
    serviceBadges: [
      {
        _id: "6215cc51cae0652290c66d9a",
        index: 1,
        type: "RESERVATION",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reservation-2.png",
          size: {
            width: 144,
            height: 48,
          },
        },
        active: true,
      },
    ],
    treatment: null,
    symptomList: [
      {
        _id: "5b323f20421b7443b4fd7995",
        name: "일반진료",
        systemDefault: false,
      },
    ],
  },
  {
    _id: "57171f13e207df2709f1cbab",
    title: "삼성키즈소아청소년과의원",
    address: "서울특별시 강남구 선릉로 26 3층 (개포동)",
    roadAddress: "서울특별시 강남구 선릉로 26 3층 (개포동)",
    position: {
      lat: 37.4822673,
      lng: 127.0614986,
    },
    tel: "02-579-2111",
    telReal: "02-579-2111",
    categories: [
      {
        _id: "57075ae27f6a8e4c08712b93",
        name: "소아청소년과",
        fullName: "소아청소년과",
      },
      {
        _id: "56a1d6f049bf220300281acf",
        fullName: "이비인후과",
        name: "이비인후과",
      },
      {
        _id: "56825965623126030012407a",
        fullName: "내과",
        name: "내과",
      },
      {
        _id: "57075ae07f6a8e4c08712b90",
        name: "가정의학과",
        fullName: "가정의학과",
      },
      {
        _id: "54b95eb302e5ff3b1fab4d3f",
        fullName: "피부과",
        name: "피부과",
      },
    ],
    createdAt: "2016-04-20T05:54:55.555Z",
    updatedAt: "2024-08-05T05:15:12.361Z",
    active: true,
    theme: {
      features: [
        {
          _id: "64129eb79ced91389ae13767",
          title: "로타백신무료접종",
          index: 4,
          highlighting: true,
          description: null,
        },
        {
          _id: "5f336784d199082548440e08",
          title: "전문의",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 8,
          highlighting: false,
        },
      ],
      specialities: [],
    },
    serviceType: ["RECEIPT", "RESERVATION", "SELF_DESK", "WAITINGS"],
    useReceptionServiceRequest: true,
    mainDepartment: {
      _id: "57075ae27f6a8e4c08712b93",
      name: "소아청소년과",
      fullName: "소아청소년과",
    },
    schedules: [
      {
        startTime: "09:00",
        endTime: "18:30",
        night: false,
        day: "monday",
      },
      {
        startTime: "09:00",
        endTime: "18:30",
        night: false,
        day: "tuesday",
      },
      {
        startTime: "09:00",
        endTime: "13:00",
        night: false,
        day: "wednesday",
      },
      {
        startTime: "09:00",
        endTime: "18:30",
        night: false,
        day: "thursday",
      },
      {
        startTime: "09:00",
        endTime: "18:30",
        night: false,
        day: "friday",
      },
      {
        startTime: "09:00",
        endTime: "13:00",
        night: false,
        day: "saturday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "sunday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "holiday",
      },
      {
        startTime: "13:00",
        endTime: "14:00",
        night: false,
        day: "lunch",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "dinner",
      },
    ],
    isReceipt: true,
    isReservation: true,
    isRealReceipt: true,
    isRealReservation: true,
    holiday: false,
    open: true,
    bCodeAddress: "서울특별시 강남구 개포동",
    dateQuery: "2024-08-05",
    useTelemedicine: false,
    medicalBills: null,
    reservationUnitKey: ["진료실"],
    isReservationSchedule: true,
    serviceBadges: [
      {
        _id: "6215cc51cae0652290c66d99",
        index: 0,
        type: "RECEIPT",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reception-2.png",
          size: {
            width: 140,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9a",
        index: 1,
        type: "RESERVATION",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reservation-2.png",
          size: {
            width: 144,
            height: 48,
          },
        },
        active: true,
      },
    ],
    treatment: {
      waitCountOption: "WAIT_COUNT",
      treatWaiting: 7,
      avgWaitTime: 3,
    },
    symptomList: [
      {
        _id: "5b323f20421b7443b4fd79a9",
        name: "영유아검진",
        systemDefault: false,
      },
      {
        _id: "5b3acfa74df0a35f8e365c77",
        name: "예방접종",
        systemDefault: false,
      },
    ],
  },
  {
    _id: "645086d4850aa6f64c81b2f8",
    title: "연세퍼스트이비인후과의원",
    mainDepartment: {
      _id: "56a1d6f049bf220300281acf",
      fullName: "이비인후과",
      name: "이비인후과",
    },
    address: "서울 강남구 개포동 167-9 6층 (개포동)",
    roadAddress: "서울 강남구 선릉로 34 6층 (개포동)",
    position: {
      lat: 37.4828398,
      lng: 127.060745,
    },
    tel: "02-579-2579",
    telReal: "02-579-2579",
    categories: [
      {
        _id: "56825965623126030012407a",
        fullName: "내과",
        name: "내과",
      },
      {
        _id: "57075ae27f6a8e4c08712b93",
        name: "소아청소년과",
        fullName: "소아청소년과",
      },
      {
        _id: "56a1d6f049bf220300281acf",
        fullName: "이비인후과",
        name: "이비인후과",
      },
    ],
    active: true,
    theme: {
      features: [
        {
          _id: "5f336784d199082548440e07",
          title: "주차장",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 2,
          highlighting: true,
        },
        {
          _id: "5f336784d199082548440e08",
          title: "전문의",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 8,
          highlighting: false,
        },
      ],
      specialities: [],
    },
    serviceType: ["RECEIPT", "RESERVATION", "WAITINGS", "PAPER"],
    schedules: [
      {
        startTime: "09:00",
        endTime: "22:00",
        night: true,
        day: "monday",
      },
      {
        startTime: "09:00",
        endTime: "19:00",
        night: false,
        day: "tuesday",
      },
      {
        startTime: "09:00",
        endTime: "22:00",
        night: true,
        day: "wednesday",
      },
      {
        startTime: "09:00",
        endTime: "19:00",
        night: false,
        day: "thursday",
      },
      {
        startTime: "09:00",
        endTime: "22:00",
        night: true,
        day: "friday",
      },
      {
        startTime: "09:00",
        endTime: "14:00",
        night: false,
        day: "saturday",
      },
      {
        startTime: "09:00",
        endTime: "13:00",
        night: false,
        day: "sunday",
      },
      {
        startTime: "09:00",
        endTime: "13:00",
        night: false,
        day: "holiday",
      },
      {
        startTime: "13:00",
        endTime: "14:00",
        night: false,
        day: "lunch",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "dinner",
      },
    ],
    useReceptionServiceRequest: true,
    createdAt: "2023-05-02T03:43:18.867Z",
    updatedAt: "2024-08-05T05:10:12.202Z",
    isReceipt: true,
    isReservation: true,
    isRealReceipt: true,
    isRealReservation: true,
    holiday: false,
    open: true,
    bCodeAddress: "서울특별시 강남구 개포동",
    dateQuery: "2024-08-05",
    useTelemedicine: false,
    medicalBills: null,
    reservationUnitKey: ["1진료실"],
    isReservationSchedule: true,
    serviceBadges: [
      {
        _id: "6215cc51cae0652290c66d99",
        index: 0,
        type: "RECEIPT",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reception-2.png",
          size: {
            width: 140,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9a",
        index: 1,
        type: "RESERVATION",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reservation-2.png",
          size: {
            width: 144,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9d",
        index: 5,
        type: "PAPER",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/paper-2.png",
          size: {
            width: 262,
            height: 48,
          },
        },
        active: true,
      },
    ],
    treatment: {
      waitCountOption: "WAIT_COUNT",
      treatWaiting: 6,
      avgWaitTime: 0,
    },
    symptomList: [
      {
        _id: "5bc94add7a1f300e30372fa6",
        name: "수액",
        systemDefault: false,
      },
    ],
  },
  {
    _id: "5ae1865b4a2f895c3d0512b2",
    title: "청담마인소아청소년과의원",
    address: "서울특별시 강남구 학동로 413 청담빌딩 202호 (청담동)",
    roadAddress: "서울특별시 강남구 학동로 413 청담빌딩 202호 (청담동)",
    position: {
      lng: 127.04516930000001,
      lat: 37.518125,
    },
    tel: "02-547-7700",
    telReal: "02-547-7700",
    categories: [
      {
        _id: "57075ae27f6a8e4c08712b93",
        name: "소아청소년과",
        fullName: "소아청소년과",
      },
      {
        _id: "56825965623126030012407a",
        fullName: "내과",
        name: "내과",
      },
      {
        _id: "56a1d6f049bf220300281acf",
        fullName: "이비인후과",
        name: "이비인후과",
      },
      {
        _id: "54b95eb302e5ff3b1fab4d3f",
        fullName: "피부과",
        name: "피부과",
      },
    ],
    createdAt: "2018-04-26T07:57:15.278Z",
    updatedAt: "2024-08-05T05:20:12.298Z",
    active: true,
    theme: {
      features: [
        {
          _id: "5ae96cfa1fd1b3023f9ed24c",
          title: "영유아검진",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_kid_examination.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description:
            "영유아의 검진에 필요한 의료진 및 시설을 갖춘 의료기관입니다.",
          index: 0,
          highlighting: true,
        },
        {
          _id: "5f336784d199082548440e07",
          title: "주차장",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 2,
          highlighting: true,
        },
        {
          _id: "64129eb79ced91389ae13767",
          title: "로타백신무료접종",
          index: 4,
          highlighting: true,
          description: null,
        },
        {
          _id: "5eba4d5dd6705b1077c309ed",
          title: "예방접종",
          image: {
            url: "https://testcdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_telemedicine.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description: "(임시) 예방접종",
          index: 7,
          highlighting: false,
        },
        {
          _id: "5f336784d199082548440e08",
          title: "전문의",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 8,
          highlighting: false,
        },
      ],
      specialities: [],
    },
    serviceType: ["RECEIPT", "RESERVATION", "SELF_DESK", "WAITINGS", "PAPER"],
    schedules: [
      {
        startTime: "08:30",
        endTime: "18:00",
        night: false,
        day: "monday",
      },
      {
        startTime: "08:30",
        endTime: "18:00",
        night: false,
        day: "tuesday",
      },
      {
        startTime: "08:30",
        endTime: "18:00",
        night: false,
        day: "wednesday",
      },
      {
        startTime: "08:30",
        endTime: "18:00",
        night: false,
        day: "thursday",
      },
      {
        startTime: "08:30",
        endTime: "18:00",
        night: false,
        day: "friday",
      },
      {
        startTime: "08:30",
        endTime: "14:00",
        night: false,
        day: "saturday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "sunday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "holiday",
      },
      {
        startTime: "13:00",
        endTime: "14:00",
        night: false,
        day: "lunch",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "dinner",
      },
    ],
    useReceptionServiceRequest: true,
    mainDepartment: {
      _id: "57075ae27f6a8e4c08712b93",
      name: "소아청소년과",
      fullName: "소아청소년과",
    },
    isReceipt: true,
    isReservation: true,
    isRealReceipt: true,
    isRealReservation: true,
    holiday: false,
    open: true,
    bCodeAddress: "서울특별시 강남구 청담동",
    dateQuery: "2024-08-05",
    useTelemedicine: false,
    medicalBills: null,
    reservationUnitKey: [],
    isReservationSchedule: false,
    serviceBadges: [
      {
        _id: "6215cc51cae0652290c66d99",
        index: 0,
        type: "RECEIPT",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reception-2.png",
          size: {
            width: 140,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9a",
        index: 1,
        type: "RESERVATION",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reservation-2.png",
          size: {
            width: 144,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9d",
        index: 5,
        type: "PAPER",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/paper-2.png",
          size: {
            width: 262,
            height: 48,
          },
        },
        active: true,
      },
    ],
    treatment: {
      waitCountOption: "WAIT_COUNT",
      treatWaiting: 1,
      avgWaitTime: 0,
    },
    symptomList: null,
  },
  {
    _id: "593e9103674c844aab60b212",
    title: "레이나산부인과의원",
    address: "서울특별시 서초구 신반포로 257 5층 (잠원동, 뉴타운)",
    roadAddress: "서울특별시 서초구 신반포로 257 5층 (잠원동, 뉴타운)",
    position: {
      lat: 37.5086203,
      lng: 127.011936,
    },
    tel: "02-537-5200",
    telReal: "02-537-5200",
    categories: [
      {
        _id: "552b5a25588f6e0300e3141f",
        fullName: "산부인과",
        name: "산부인과",
      },
    ],
    createdAt: "2017-06-12T13:03:04.836Z",
    updatedAt: "2024-08-05T00:30:12.411Z",
    active: true,
    theme: {
      features: [
        {
          _id: "5f336784d199082548440e07",
          title: "주차장",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 2,
          highlighting: true,
        },
        {
          _id: "5eba4d5dd6705b1077c309ed",
          title: "예방접종",
          image: {
            url: "https://testcdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_telemedicine.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description: "(임시) 예방접종",
          index: 7,
          highlighting: false,
        },
        {
          _id: "5f336784d199082548440e08",
          title: "전문의",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 8,
          highlighting: false,
        },
      ],
      specialities: [],
    },
    serviceType: ["RESERVATION"],
    useReceptionServiceRequest: true,
    mainDepartment: {
      _id: "552b5a25588f6e0300e3141f",
      fullName: "산부인과",
      name: "산부인과",
    },
    schedules: [
      {
        startTime: "09:10",
        endTime: "17:30",
        night: false,
        day: "monday",
      },
      {
        startTime: "09:10",
        endTime: "17:30",
        night: false,
        day: "tuesday",
      },
      {
        startTime: "09:10",
        endTime: "13:00",
        night: false,
        day: "wednesday",
      },
      {
        startTime: "09:10",
        endTime: "17:30",
        night: false,
        day: "thursday",
      },
      {
        startTime: "09:10",
        endTime: "17:30",
        night: false,
        day: "friday",
      },
      {
        startTime: "09:10",
        endTime: "13:00",
        night: false,
        day: "saturday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "sunday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "holiday",
      },
      {
        startTime: "13:00",
        endTime: "14:00",
        night: false,
        day: "lunch",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "dinner",
      },
    ],
    isReceipt: false,
    isReservation: true,
    isRealReceipt: false,
    isRealReservation: true,
    holiday: false,
    open: true,
    bCodeAddress: "서울특별시 서초구 잠원동",
    dateQuery: "2024-08-05",
    useTelemedicine: false,
    medicalBills: null,
    reservationUnitKey: ["진료실"],
    isReservationSchedule: true,
    serviceBadges: [
      {
        _id: "6215cc51cae0652290c66d9a",
        index: 1,
        type: "RESERVATION",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reservation-2.png",
          size: {
            width: 144,
            height: 48,
          },
        },
        active: true,
      },
    ],
    treatment: null,
    symptomList: [
      {
        _id: "5d4a7f127af7a10011805a09",
        name: "검사",
        systemDefault: false,
      },
      {
        _id: "5bb19195ea0cd90f44fa4ff4",
        name: "공단검진",
        systemDefault: false,
      },
      {
        _id: "5b4db0fc1bab86583041e7c8",
        name: "배란",
        systemDefault: false,
      },
      {
        _id: "5dc8cb9bdcecae0012b461ff",
        name: "부인과",
        systemDefault: false,
      },
      {
        _id: "5b4700b7ca6a8a4c38d26997",
        name: "생리불순",
        systemDefault: false,
      },
    ],
  },
  {
    _id: "651f4e12d4eb0c6101af6aac",
    title: "예젤유의원",
    mainDepartment: {
      _id: "57075ae37f6a8e4c08712b94",
      name: "영상의학과",
      fullName: "영상의학과",
    },
    address: "서울특별시 강남구 역삼동 682-23 KS병원",
    roadAddress: "서울 강남구 선릉로 571 (KS병원) 3층",
    position: {
      lat: 37.5093284,
      lng: 127.0439661,
    },
    tel: "0507-1351-5380",
    telReal: "0507-1351-5380",
    categories: [
      {
        _id: "57075ae37f6a8e4c08712b94",
        name: "영상의학과",
        fullName: "영상의학과",
      },
    ],
    active: true,
    theme: {
      features: [
        {
          _id: "5f336784d199082548440e08",
          title: "전문의",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 8,
          highlighting: false,
        },
      ],
      specialities: [],
    },
    serviceType: ["RESERVATION", "SELF_DESK", "WAITINGS", "PAPER"],
    schedules: [
      {
        startTime: "09:00",
        endTime: "17:00",
        night: false,
        day: "monday",
      },
      {
        startTime: "09:00",
        endTime: "17:00",
        night: false,
        day: "tuesday",
      },
      {
        startTime: "09:00",
        endTime: "17:00",
        night: false,
        day: "wednesday",
      },
      {
        startTime: "09:00",
        endTime: "17:00",
        night: false,
        day: "thursday",
      },
      {
        startTime: "09:00",
        endTime: "17:00",
        night: false,
        day: "friday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "saturday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "sunday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "holiday",
      },
      {
        startTime: "13:00",
        endTime: "14:00",
        night: false,
        day: "lunch",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "dinner",
      },
    ],
    useReceptionServiceRequest: true,
    createdAt: "2023-10-05T17:10:24.766Z",
    updatedAt: "2024-08-05T05:15:12.378Z",
    isReceipt: false,
    isReservation: true,
    isRealReceipt: false,
    isRealReservation: true,
    holiday: false,
    open: true,
    bCodeAddress: "서울특별시 강남구 역삼동",
    dateQuery: "2024-08-05",
    useTelemedicine: false,
    medicalBills: null,
    reservationUnitKey: ["진료실2"],
    isReservationSchedule: true,
    serviceBadges: [
      {
        _id: "6215cc51cae0652290c66d9a",
        index: 1,
        type: "RESERVATION",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reservation-2.png",
          size: {
            width: 144,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9d",
        index: 5,
        type: "PAPER",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/paper-2.png",
          size: {
            width: 262,
            height: 48,
          },
        },
        active: true,
      },
    ],
    treatment: null,
    symptomList: [
      {
        _id: "5ec391717209c10018c9e156",
        name: "유방 초음파",
        systemDefault: false,
      },
      {
        _id: "5f68754f4e98b7001d86a9a2",
        name: "초음파검사",
        systemDefault: false,
      },
    ],
  },
  {
    _id: "57171f12e207df2709f1c6af",
    title: "소소아청소년과의원",
    address: "서울 서초구 우면동 725 네이처프라자",
    roadAddress: "서울특별시 서초구 태봉로 62 네이처프라자",
    position: {
      lat: 37.46403100606885,
      lng: 127.02499467235515,
    },
    tel: "02-573-1119",
    telReal: "02-573-1119",
    categories: [
      {
        _id: "57075ae27f6a8e4c08712b93",
        name: "소아청소년과",
        fullName: "소아청소년과",
      },
    ],
    createdAt: "2016-04-20T05:54:55.531Z",
    updatedAt: "2024-08-05T05:20:12.298Z",
    active: true,
    theme: {
      features: [
        {
          _id: "5ae96cfa1fd1b3023f9ed24c",
          title: "영유아검진",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_kid_examination.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description:
            "영유아의 검진에 필요한 의료진 및 시설을 갖춘 의료기관입니다.",
          index: 0,
          highlighting: true,
        },
        {
          _id: "64129eb79ced91389ae13767",
          title: "로타백신무료접종",
          index: 4,
          highlighting: true,
          description: null,
        },
        {
          _id: "5eba4d5dd6705b1077c309ed",
          title: "예방접종",
          image: {
            url: "https://testcdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_telemedicine.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description: "(임시) 예방접종",
          index: 7,
          highlighting: false,
        },
        {
          _id: "5f336784d199082548440e08",
          title: "전문의",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 8,
          highlighting: false,
        },
      ],
      specialities: [],
    },
    serviceType: ["RECEIPT", "RESERVATION", "WAITINGS"],
    schedules: [
      {
        startTime: "08:30",
        endTime: "20:00",
        night: true,
        day: "monday",
      },
      {
        startTime: "08:30",
        endTime: "18:30",
        night: false,
        day: "tuesday",
      },
      {
        startTime: "08:30",
        endTime: "20:00",
        night: true,
        day: "wednesday",
      },
      {
        startTime: "08:30",
        endTime: "18:30",
        night: false,
        day: "thursday",
      },
      {
        startTime: "08:30",
        endTime: "20:00",
        night: true,
        day: "friday",
      },
      {
        startTime: "08:30",
        endTime: "14:00",
        night: false,
        day: "saturday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "sunday",
      },
      {
        startTime: "08:30",
        endTime: "13:00",
        night: false,
        day: "holiday",
      },
      {
        startTime: "13:00",
        endTime: "14:00",
        night: false,
        day: "lunch",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "dinner",
      },
    ],
    useReceptionServiceRequest: true,
    mainDepartment: {
      _id: "57075ae27f6a8e4c08712b93",
      name: "소아청소년과",
      fullName: "소아청소년과",
    },
    isReceipt: true,
    isReservation: true,
    isRealReceipt: true,
    isRealReservation: true,
    holiday: false,
    open: true,
    bCodeAddress: "서울특별시 서초구 우면동",
    dateQuery: "2024-08-05",
    useTelemedicine: false,
    medicalBills: null,
    reservationUnitKey: [],
    isReservationSchedule: false,
    serviceBadges: [
      {
        _id: "6215cc51cae0652290c66d99",
        index: 0,
        type: "RECEIPT",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reception-2.png",
          size: {
            width: 140,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9a",
        index: 1,
        type: "RESERVATION",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reservation-2.png",
          size: {
            width: 144,
            height: 48,
          },
        },
        active: true,
      },
    ],
    treatment: {
      waitCountOption: "WAIT_COUNT",
      treatWaiting: 7,
      avgWaitTime: 2,
    },
    symptomList: null,
  },
  {
    _id: "5ebcefd233284c069e9d4ce0",
    theme: {
      features: [
        {
          _id: "5ae96cfa1fd1b3023f9ed24c",
          title: "영유아검진",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_kid_examination.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description:
            "영유아의 검진에 필요한 의료진 및 시설을 갖춘 의료기관입니다.",
          index: 0,
          highlighting: true,
        },
        {
          _id: "5f336784d199082548440e07",
          title: "주차장",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 2,
          highlighting: true,
        },
        {
          _id: "64129eb79ced91389ae13767",
          title: "로타백신무료접종",
          index: 4,
          highlighting: true,
          description: null,
        },
        {
          _id: "5eba4d5dd6705b1077c309ed",
          title: "예방접종",
          image: {
            url: "https://testcdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_telemedicine.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description: "(임시) 예방접종",
          index: 7,
          highlighting: false,
        },
        {
          _id: "5f336784d199082548440e08",
          title: "전문의",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 8,
          highlighting: false,
        },
      ],
      specialities: [],
    },
    roadAddress: "서울특별시 강남구 삼성로 712 마리빌딩 지하1층(청담동)",
    categories: [
      {
        _id: "57075ae27f6a8e4c08712b93",
        name: "소아청소년과",
        fullName: "소아청소년과",
      },
    ],
    active: true,
    serviceType: ["RESERVATION", "WAITINGS"],
    useReceptionServiceRequest: true,
    title: "청담드림소아청소년과의원",
    address: "서울특별시 강남구 삼성로 712 마리빌딩 지하1층(청담동)",
    position: {
      lat: 37.51968159999999,
      lng: 127.0501417,
    },
    tel: "02-517-3123",
    telReal: "02-517-3123",
    schedules: [
      {
        startTime: "09:00",
        endTime: "18:00",
        night: false,
        day: "monday",
      },
      {
        startTime: "09:00",
        endTime: "18:00",
        night: false,
        day: "tuesday",
      },
      {
        startTime: "09:00",
        endTime: "13:00",
        night: false,
        day: "wednesday",
      },
      {
        startTime: "09:00",
        endTime: "18:00",
        night: false,
        day: "thursday",
      },
      {
        startTime: "09:00",
        endTime: "18:00",
        night: false,
        day: "friday",
      },
      {
        startTime: "09:00",
        endTime: "13:00",
        night: false,
        day: "saturday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "sunday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "holiday",
      },
      {
        startTime: "13:00",
        endTime: "14:00",
        night: false,
        day: "lunch",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "dinner",
      },
    ],
    mainDepartment: {
      _id: "57075ae27f6a8e4c08712b93",
      name: "소아청소년과",
      fullName: "소아청소년과",
    },
    createdAt: "2020-05-14T07:14:40.672Z",
    updatedAt: "2024-08-05T05:05:12.298Z",
    isReceipt: false,
    isReservation: true,
    isRealReceipt: false,
    isRealReservation: true,
    holiday: false,
    open: true,
    bCodeAddress: "서울특별시 강남구 청담동",
    dateQuery: "2024-08-05",
    useTelemedicine: false,
    medicalBills: null,
    reservationUnitKey: ["진료실1"],
    isReservationSchedule: true,
    serviceBadges: [
      {
        _id: "6215cc51cae0652290c66d9a",
        index: 1,
        type: "RESERVATION",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reservation-2.png",
          size: {
            width: 144,
            height: 48,
          },
        },
        active: true,
      },
    ],
    treatment: null,
    symptomList: [
      {
        _id: "62020992bb666f1a73597326",
        name: "※신속항원검사",
        systemDefault: false,
      },
      {
        _id: "63eb33d672eb9500064a4085",
        name: "소아",
        systemDefault: false,
      },
      {
        _id: "5ed466d4929932001153d702",
        name: "신생아",
        systemDefault: false,
      },
      {
        _id: "5b3acfa74df0a35f8e365c77",
        name: "예방접종",
        systemDefault: false,
      },
      {
        _id: "5b323f20421b7443b4fd7995",
        name: "일반진료",
        systemDefault: false,
      },
      {
        _id: "5e37d63cdbbcd10011414ded",
        name: "청소년진료",
        systemDefault: false,
      },
      {
        _id: "606d4f84974e8e0012eec427",
        name: "코로나백신접종",
        systemDefault: false,
      },
    ],
  },
  {
    _id: "63eb1ce51b1b8ede3f9afbe9",
    title: "연세바다소아청소년과의원",
    mainDepartment: {
      _id: "57075ae27f6a8e4c08712b93",
      name: "소아청소년과",
      fullName: "소아청소년과",
    },
    address:
      "서울 강남구 개포동 1283 2층 209,210,211-1호 (개포동, 개포자이르네)",
    roadAddress:
      "서울 강남구 언주로7길 6 2층 209,210,211-1호 (개포동, 개포자이르네)",
    position: {
      lat: 37.4785583,
      lng: 127.055481,
    },
    tel: "02-571-0234",
    telReal: "02-571-0234",
    categories: [
      {
        _id: "57075ae27f6a8e4c08712b93",
        name: "소아청소년과",
        fullName: "소아청소년과",
      },
      {
        _id: "56825965623126030012407a",
        fullName: "내과",
        name: "내과",
      },
      {
        _id: "57075ae07f6a8e4c08712b90",
        name: "가정의학과",
        fullName: "가정의학과",
      },
      {
        _id: "56a1d6f049bf220300281acf",
        fullName: "이비인후과",
        name: "이비인후과",
      },
      {
        _id: "54b95eb302e5ff3b1fab4d3f",
        fullName: "피부과",
        name: "피부과",
      },
    ],
    active: true,
    theme: {
      features: [
        {
          _id: "5ae96cfa1fd1b3023f9ed24c",
          title: "영유아검진",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_kid_examination.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description:
            "영유아의 검진에 필요한 의료진 및 시설을 갖춘 의료기관입니다.",
          index: 0,
          highlighting: true,
        },
        {
          _id: "5f336784d199082548440e07",
          title: "주차장",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 2,
          highlighting: true,
        },
        {
          _id: "64129eb79ced91389ae13767",
          title: "로타백신무료접종",
          index: 4,
          highlighting: true,
          description: null,
        },
        {
          _id: "5eba4d5dd6705b1077c309ed",
          title: "예방접종",
          image: {
            url: "https://testcdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_telemedicine.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description: "(임시) 예방접종",
          index: 7,
          highlighting: false,
        },
        {
          _id: "5f336784d199082548440e08",
          title: "전문의",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 8,
          highlighting: false,
        },
      ],
      specialities: [],
    },
    serviceType: ["RECEIPT", "RESERVATION", "SELF_DESK", "WAITINGS"],
    schedules: [
      {
        startTime: "09:00",
        endTime: "19:00",
        night: false,
        day: "monday",
      },
      {
        startTime: "09:00",
        endTime: "22:00",
        night: true,
        day: "tuesday",
      },
      {
        startTime: "09:00",
        endTime: "19:00",
        night: false,
        day: "wednesday",
      },
      {
        startTime: "09:00",
        endTime: "22:00",
        night: true,
        day: "thursday",
      },
      {
        startTime: "09:00",
        endTime: "19:00",
        night: false,
        day: "friday",
      },
      {
        startTime: "09:00",
        endTime: "14:00",
        night: false,
        day: "saturday",
      },
      {
        startTime: "09:00",
        endTime: "13:00",
        night: false,
        day: "sunday",
      },
      {
        startTime: "09:00",
        endTime: "13:00",
        night: false,
        day: "holiday",
      },
      {
        startTime: "13:00",
        endTime: "14:30",
        night: false,
        day: "lunch",
      },
      {
        startTime: "19:00",
        endTime: "19:30",
        night: false,
        day: "dinner",
      },
    ],
    useReceptionServiceRequest: true,
    createdAt: "2023-02-14T05:32:22.824Z",
    updatedAt: "2024-08-05T05:20:12.284Z",
    isReceipt: true,
    isReservation: true,
    isRealReceipt: true,
    isRealReservation: true,
    holiday: false,
    open: true,
    bCodeAddress: "서울특별시 강남구 개포동",
    dateQuery: "2024-08-05",
    useTelemedicine: false,
    medicalBills: null,
    reservationUnitKey: ["2진료실"],
    isReservationSchedule: true,
    serviceBadges: [
      {
        _id: "6215cc51cae0652290c66d99",
        index: 0,
        type: "RECEIPT",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reception-2.png",
          size: {
            width: 140,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9a",
        index: 1,
        type: "RESERVATION",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reservation-2.png",
          size: {
            width: 144,
            height: 48,
          },
        },
        active: true,
      },
    ],
    treatment: null,
    symptomList: [
      {
        _id: "5cc283e9fef0be001039490f",
        name: "성장클리닉",
        systemDefault: false,
      },
      {
        _id: "5b323f20421b7443b4fd79a9",
        name: "영유아검진",
        systemDefault: false,
      },
      {
        _id: "5b3acfa74df0a35f8e365c77",
        name: "예방접종",
        systemDefault: false,
      },
    ],
  },
  {
    _id: "65d405da15a7644957415c44",
    title: "연세도우리소아청소년과의원",
    mainDepartment: {
      _id: "57075ae27f6a8e4c08712b93",
      name: "소아청소년과",
      fullName: "소아청소년과",
    },
    address: "서울특별시 강남구 개포동 189 개포자이 프레지던스",
    roadAddress:
      "서울 강남구 삼성로 14 (개포자이 프레지던스) 자이스퀘어 상가 216호 소아청소년과 / 312호 발달클리닉",
    position: {
      lat: 37.487977579295695,
      lng: 127.073944686261,
    },
    tel: "02-459-2024",
    telReal: "02-459-2024",
    categories: [
      {
        _id: "57075ae27f6a8e4c08712b93",
        name: "소아청소년과",
        fullName: "소아청소년과",
      },
      {
        _id: "56825965623126030012407a",
        fullName: "내과",
        name: "내과",
      },
      {
        _id: "56a1d6f049bf220300281acf",
        fullName: "이비인후과",
        name: "이비인후과",
      },
      {
        _id: "57075ae37f6a8e4c08712b94",
        name: "영상의학과",
        fullName: "영상의학과",
      },
    ],
    active: true,
    theme: {
      features: [
        {
          _id: "5ae96cfa1fd1b3023f9ed24c",
          title: "영유아검진",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_kid_examination.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description:
            "영유아의 검진에 필요한 의료진 및 시설을 갖춘 의료기관입니다.",
          index: 0,
          highlighting: true,
        },
        {
          _id: "5f336784d199082548440e07",
          title: "주차장",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 2,
          highlighting: true,
        },
        {
          _id: "59264df251111a11415bee2b",
          title: "여의사",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_obWomanDoctor.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description: "여의사가 진료하는 산부인과입니다.",
          index: 3,
          highlighting: true,
        },
        {
          _id: "64129eb79ced91389ae13767",
          title: "로타백신무료접종",
          index: 4,
          highlighting: true,
          description: null,
        },
        {
          _id: "5eba4d5dd6705b1077c309ed",
          title: "예방접종",
          image: {
            url: "https://testcdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_telemedicine.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description: "(임시) 예방접종",
          index: 7,
          highlighting: false,
        },
        {
          _id: "5f336784d199082548440e08",
          title: "전문의",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 8,
          highlighting: false,
        },
      ],
      specialities: [],
    },
    serviceType: [
      "RECEIPT",
      "RESERVATION",
      "SELF_DESK",
      "WAITINGS",
      "EXAMINATION_INFANTS",
      "PAPER",
    ],
    schedules: [
      {
        startTime: "08:30",
        endTime: "23:00",
        night: true,
        day: "monday",
      },
      {
        startTime: "08:30",
        endTime: "23:00",
        night: true,
        day: "tuesday",
      },
      {
        startTime: "08:30",
        endTime: "23:00",
        night: true,
        day: "wednesday",
      },
      {
        startTime: "08:30",
        endTime: "23:00",
        night: true,
        day: "thursday",
      },
      {
        startTime: "08:30",
        endTime: "23:00",
        night: true,
        day: "friday",
      },
      {
        startTime: "09:00",
        endTime: "18:00",
        night: false,
        day: "saturday",
      },
      {
        startTime: "09:00",
        endTime: "18:00",
        night: false,
        day: "sunday",
      },
      {
        startTime: "09:00",
        endTime: "18:00",
        night: false,
        day: "holiday",
      },
      {
        startTime: "12:30",
        endTime: "13:30",
        night: false,
        day: "lunch",
      },
      {
        startTime: "17:30",
        endTime: "18:00",
        night: false,
        day: "dinner",
      },
    ],
    useReceptionServiceRequest: true,
    createdAt: "2024-02-20T01:52:31.827Z",
    updatedAt: "2024-08-05T05:20:12.298Z",
    isReceipt: true,
    isReservation: true,
    isRealReceipt: true,
    isRealReservation: true,
    holiday: false,
    open: true,
    bCodeAddress: "서울특별시 강남구 개포동",
    dateQuery: "2024-08-05",
    useTelemedicine: false,
    medicalBills: null,
    reservationUnitKey: [],
    isReservationSchedule: false,
    serviceBadges: [
      {
        _id: "6215cc51cae0652290c66d99",
        index: 0,
        type: "RECEIPT",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reception-2.png",
          size: {
            width: 140,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9a",
        index: 1,
        type: "RESERVATION",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reservation-2.png",
          size: {
            width: 144,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9d",
        index: 5,
        type: "PAPER",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/paper-2.png",
          size: {
            width: 262,
            height: 48,
          },
        },
        active: true,
      },
    ],
    treatment: {
      waitCountOption: "WAIT_COUNT",
      treatWaiting: 3,
      avgWaitTime: 5,
    },
    symptomList: null,
  },
  {
    _id: "57171f12e207df2709f1c14d",
    title: "지에프소아청소년과의원",
    address: "서울특별시 서초구 방배동 1549 예다인프라자 3층",
    roadAddress: "서울특별시 서초구 동작대로 118 방배동예다인프라자빌딩 3층",
    position: {
      lat: 37.4869655,
      lng: 126.98273240000003,
    },
    tel: "02-522-5119",
    telReal: "02-522-5119",
    categories: [
      {
        _id: "57075ae27f6a8e4c08712b93",
        name: "소아청소년과",
        fullName: "소아청소년과",
      },
      {
        _id: "56825965623126030012407a",
        fullName: "내과",
        name: "내과",
      },
      {
        _id: "56a1d6f049bf220300281acf",
        fullName: "이비인후과",
        name: "이비인후과",
      },
      {
        _id: "57075ae37f6a8e4c08712b94",
        name: "영상의학과",
        fullName: "영상의학과",
      },
      {
        _id: "57075ae47f6a8e4c08712b97",
        name: "병리과",
        fullName: "병리과",
      },
      {
        _id: "57075ae37f6a8e4c08712b94",
        name: "영상의학과",
        fullName: "영상의학과",
      },
    ],
    createdAt: "2016-04-20T05:54:55.507Z",
    updatedAt: "2024-08-05T05:15:12.378Z",
    active: true,
    theme: {
      features: [
        {
          _id: "5ae96cfa1fd1b3023f9ed24c",
          title: "영유아검진",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_kid_examination.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description:
            "영유아의 검진에 필요한 의료진 및 시설을 갖춘 의료기관입니다.",
          index: 0,
          highlighting: true,
        },
        {
          _id: "5f336784d199082548440e07",
          title: "주차장",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 2,
          highlighting: true,
        },
        {
          _id: "64129eb79ced91389ae13767",
          title: "로타백신무료접종",
          index: 4,
          highlighting: true,
          description: null,
        },
        {
          _id: "5eba4d5dd6705b1077c309ed",
          title: "예방접종",
          image: {
            url: "https://testcdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_telemedicine.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description: "(임시) 예방접종",
          index: 7,
          highlighting: false,
        },
        {
          _id: "5f336784d199082548440e08",
          title: "전문의",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 8,
          highlighting: false,
        },
      ],
      specialities: [],
    },
    serviceType: ["RECEIPT", "RESERVATION", "SELF_DESK", "KIOSK", "WAITINGS"],
    schedules: [
      {
        startTime: "09:00",
        endTime: "18:00",
        night: false,
        day: "monday",
      },
      {
        startTime: "09:00",
        endTime: "18:00",
        night: false,
        day: "tuesday",
      },
      {
        startTime: "09:00",
        endTime: "21:00",
        night: true,
        day: "wednesday",
      },
      {
        startTime: "09:00",
        endTime: "18:00",
        night: false,
        day: "thursday",
      },
      {
        startTime: "09:00",
        endTime: "18:00",
        night: false,
        day: "friday",
      },
      {
        startTime: "09:00",
        endTime: "16:00",
        night: false,
        day: "saturday",
      },
      {
        startTime: "10:00",
        endTime: "16:00",
        night: false,
        day: "sunday",
      },
      {
        startTime: "10:00",
        endTime: "16:00",
        night: false,
        day: "holiday",
      },
      {
        startTime: "12:00",
        endTime: "14:00",
        night: false,
        day: "lunch",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "dinner",
      },
    ],
    useReceptionServiceRequest: true,
    mainDepartment: {
      _id: "57075ae27f6a8e4c08712b93",
      name: "소아청소년과",
      fullName: "소아청소년과",
    },
    isReceipt: true,
    isReservation: true,
    isRealReceipt: false,
    isRealReservation: true,
    holiday: false,
    open: true,
    bCodeAddress: "서울특별시 서초구 방배동",
    dateQuery: "2024-08-05",
    useTelemedicine: false,
    medicalBills: null,
    reservationUnitKey: ["진료실1", "키오스크", "진료실3"],
    isReservationSchedule: true,
    serviceBadges: [
      {
        _id: "6215cc51cae0652290c66d99",
        index: 0,
        type: "RECEIPT",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reception-2.png",
          size: {
            width: 140,
            height: 48,
          },
        },
        active: true,
      },
      {
        _id: "6215cc51cae0652290c66d9a",
        index: 1,
        type: "RESERVATION",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reservation-2.png",
          size: {
            width: 144,
            height: 48,
          },
        },
        active: true,
      },
    ],
    treatment: null,
    symptomList: [
      {
        _id: "5b3acfa74df0a35f8e365c77",
        name: "예방접종",
        systemDefault: false,
      },
      {
        _id: "5b323f20421b7443b4fd7995",
        name: "일반진료",
        systemDefault: false,
      },
    ],
  },
  {
    _id: "57171f13e207df2709f1cb15",
    title: "가야내과의원",
    address: "서울특별시 서초구 방배로 225",
    roadAddress: "서울특별시 서초구 방배로 225",
    position: {
      lat: 37.493163167876794,
      lng: 126.98974079610801,
    },
    tel: "02-537-1121",
    telReal: "02-537-1121",
    categories: [
      {
        _id: "56825965623126030012407a",
        fullName: "내과",
        name: "내과",
      },
      {
        _id: "552b5a25588f6e0300e3141f",
        fullName: "산부인과",
        name: "산부인과",
      },
    ],
    createdAt: "2016-04-20T05:54:55.553Z",
    updatedAt: "2024-08-05T02:45:12.297Z",
    active: true,
    theme: {
      features: [
        {
          _id: "5f336784d199082548440e07",
          title: "주차장",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 2,
          highlighting: true,
        },
        {
          _id: "5eba4d5dd6705b1077c309ed",
          title: "예방접종",
          image: {
            url: "https://testcdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_telemedicine.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description: "(임시) 예방접종",
          index: 7,
          highlighting: false,
        },
        {
          _id: "5f336784d199082548440e08",
          title: "전문의",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/cut.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          index: 8,
          highlighting: false,
        },
        {
          _id: "59264df251111a11415bee2c",
          title: "건강검진",
          image: {
            url: "https://cdn.ddocdoc.com/hospital-feature-theme/ic_hospitalFeatureTheme_examination.png",
            size: {
              width: 96,
              height: 96,
            },
          },
          description: "건강검진 진료 서비스를 제공하는 병원입니다.",
          index: 10,
          highlighting: false,
        },
      ],
      specialities: [],
    },
    serviceType: ["RESERVATION"],
    schedules: [
      {
        startTime: "08:30",
        endTime: "18:00",
        night: false,
        day: "monday",
      },
      {
        startTime: "08:30",
        endTime: "18:00",
        night: false,
        day: "tuesday",
      },
      {
        startTime: "08:30",
        endTime: "18:00",
        night: false,
        day: "wednesday",
      },
      {
        startTime: "08:30",
        endTime: "18:00",
        night: false,
        day: "thursday",
      },
      {
        startTime: "08:30",
        endTime: "18:00",
        night: false,
        day: "friday",
      },
      {
        startTime: "08:30",
        endTime: "13:00",
        night: false,
        day: "saturday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "sunday",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "holiday",
      },
      {
        startTime: "13:00",
        endTime: "14:00",
        night: false,
        day: "lunch",
      },
      {
        startTime: null,
        endTime: null,
        night: false,
        day: "dinner",
      },
    ],
    useReceptionServiceRequest: true,
    mainDepartment: {
      _id: "56825965623126030012407a",
      fullName: "내과",
      name: "내과",
    },
    isReceipt: false,
    isReservation: true,
    isRealReceipt: false,
    isRealReservation: true,
    holiday: false,
    open: true,
    bCodeAddress: "서울특별시 서초구 방배동",
    dateQuery: "2024-08-05",
    useTelemedicine: false,
    medicalBills: null,
    reservationUnitKey: ["MED"],
    isReservationSchedule: true,
    serviceBadges: [
      {
        _id: "6215cc51cae0652290c66d9a",
        index: 1,
        type: "RESERVATION",
        image: {
          url: "https://cdn.ddocdoc.com/hospital-service-type-badges/drawable-xxxhdpi/reservation-2.png",
          size: {
            width: 144,
            height: 48,
          },
        },
        active: true,
      },
    ],
    treatment: null,
    symptomList: [
      {
        _id: "5b3acfa74df0a35f8e365c77",
        name: "예방접종",
        systemDefault: false,
      },
      {
        _id: "5b323f20421b7443b4fd7995",
        name: "일반진료",
        systemDefault: false,
      },
    ],
  },
];

const container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(1,1fr}";

data.forEach((x) => {
  const box = document.createElement("div");
  box.className = "hospital";
  box.innerHTML = `<div class="container">
      <div class="hospital">
        <h3>${x.title}</h3>
        <span>${x.address}</span>
        <span>${x.tel}</span>
      </div>
    </div>`;
  container.appendChild(box);
});

document.body.appendChild(container);
