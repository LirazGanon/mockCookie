import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

const soldiers = [
  {
    _id: '5491198',
    onlyChild: 2,
    startDateOnlyChild: '13/10/2020',
    endDateOnlyChild: '31/12/9999',
    gender: {
      code: '1',
      description: 'זכר',
    },
    birth_date: '10/02/2001',
    status: {
      code: 0,
      description: 'רווק',
    },
    numberOfChildren: 0,
    last_name: 'דר לנגפורד',
    tz: '301491198',
    first_name: 'אדם',
    religion: {
      code: 1,
      description: 'Jewish',
    },
    recruitmentDate: '03/03/2022',
    end_hova_service: '06/03/2024',
    release_date: '05/09/2025',
    service_type: {
      code: '1',
      description: 'חובה',
    },
    entry_reason: {
      code: '04',
      description: 'מתנדבים',
    },
    entitlement_vacation: 18,
    exploitation_vacation: '0.00',
    codePikud: {
      code: 9961,
      description: "אגף התקשוב וההגנה בסב''ר 808",
    },
    service_status: {
      code: 'E',
      description: 'רגיל',
    },
    shakedDateCurrent: 1,
    shakedDatePrevious: 0,
    disasterAddresses: [
      {
        firstName: 'לימור',
        lastName: 'דר',
        relation: {
          code: '13',
          description: 'אם',
        },
        phoneNum: '0523803183',
        country: 'IL',
        city: {
          code: '1247',
          description: 'חריש',
        },
        street: {
          code: '106',
          description: 'טורקיז',
        },
        houseNum: '47',
        relationTz: '058786781',
      },
    ],
    hospitalizedInd: 0,
    prisoner: 'ME',
    prisonerStartDate: '20/05/2022',
    prisonerEndDate: '31/12/9999',
    entitleCommanderDays: 3,
    utilizationCommanderDays: 0,
    entryKevaDate: '29/06/2022',
    main_address_home_num: '26',
    main_address_postal_code: 3706200,
    main_address_apartment: '11',
    email: 'ADAMDARLANGFORD@GMAIL.COM',
    profile: 25,
    tashRequests: [
      {
        statusRequest: {
          code: '01',
          description: 'בתהליך',
        },
        tashRequest: {
          code: '462',
          description: 'היתר עבודה פרטית',
        },
        startDateRequest: '23/05/2023',
        endDateRequest: '31/12/9999',
      },
      {
        statusRequest: {
          code: '01',
          description: 'בתהליך',
        },
        tashRequest: {
          code: '466',
          description: 'הת"ש',
        },
        startDateRequest: '23/05/2023',
        endDateRequest: '31/12/9999',
      },
    ],
    main_address_city: {
      code: '7800',
      description: 'פרדס חנה-כרכור',
    },
    main_address_street: '591',
    main_address_street_name: 'נטע',
    number_entitled_child: '0',
    ind_life_insurance: 'X',
    shakedDate: '29/09/2022',
    tash_family_status: '0',
    cellphone_num: '0546216151',
    numberOfGardenChildren: '0',
    utiAccumulatedVacHova: 0,
    entitleAccumulatedVacHova: 0.5,
    fullDetails: true,
    isPartOfTree: false,
  },
  {
    _id: '8731963',
    onlyChild: 2,
    startDateOnlyChild: '13/10/2020',
    endDateOnlyChild: '31/12/9999',
    gender: {
      code: '1',
      description: 'זכר',
    },
    birth_date: '10/02/2001',
    status: {
      code: 0,
      description: 'רווק',
    },
    numberOfChildren: 0,
    last_name: 'דר לנגפורד',
    tz: '209720705',
    first_name: 'אדם',
    religion: {
      code: 1,
      description: 'Jewish',
    },
    recruitmentDate: '03/03/2022',
    end_hova_service: '06/03/2024',
    release_date: '05/09/2025',
    service_type: {
      code: '1',
      description: 'חובה',
    },
    entry_reason: {
      code: '04',
      description: 'מתנדבים',
    },
    entitlement_vacation: 18,
    exploitation_vacation: '0.00',
    codePikud: {
      code: 9961,
      description: "אגף התקשוב וההגנה בסב''ר 808",
    },
    service_status: {
      code: 'E',
      description: 'רגיל',
    },
    shakedDateCurrent: 1,
    shakedDatePrevious: 0,
    disasterAddresses: [
      {
        firstName: 'לימור',
        lastName: 'דר',
        relation: {
          code: '13',
          description: 'אם',
        },
        phoneNum: '0523803183',
        country: 'IL',
        city: {
          code: '1247',
          description: 'חריש',
        },
        street: {
          code: '106',
          description: 'טורקיז',
        },
        houseNum: '47',
        relationTz: '058786781',
      },
    ],
    hospitalizedInd: 0,
    prisoner: 'ME',
    prisonerStartDate: '20/05/2022',
    prisonerEndDate: '31/12/9999',
    entitleCommanderDays: 3,
    utilizationCommanderDays: 0,
    entryKevaDate: '29/06/2022',
    main_address_home_num: '26',
    main_address_postal_code: 3706200,
    main_address_apartment: '11',
    email: 'ADAMDARLANGFORD@GMAIL.COM',
    profile: 25,
    tashRequests: [
      {
        statusRequest: {
          code: '01',
          description: 'בתהליך',
        },
        tashRequest: {
          code: '462',
          description: 'היתר עבודה פרטית',
        },
        startDateRequest: '23/05/2023',
        endDateRequest: '31/12/9999',
      },
      {
        statusRequest: {
          code: '01',
          description: 'בתהליך',
        },
        tashRequest: {
          code: '466',
          description: 'הת"ש',
        },
        startDateRequest: '23/05/2023',
        endDateRequest: '31/12/9999',
      },
    ],
    main_address_city: {
      code: '7800',
      description: 'פרדס חנה-כרכור',
    },
    main_address_street: '591',
    main_address_street_name: 'נטע',
    number_entitled_child: '0',
    ind_life_insurance: 'X',
    shakedDate: '29/09/2022',
    tash_family_status: '0',
    cellphone_num: '0546216151',
    numberOfGardenChildren: '0',
    utiAccumulatedVacHova: 0,
    entitleAccumulatedVacHova: 0.5,
    fullDetails: true,
    isPartOfTree: false,
  },
];

const mockTree = [
  {
    _id: '1-012-0',
    allSoldiersIds: ['5491198', '8731963'],
    objId: '1',
    relat: '012',
    relObj: '0',
    description: '',
    level: '1',
    hideFlag: '',
    children: [
      {
        _id: '5491198-012-1',
        objId: '5491198',
        relat: '012',
        relObj: '1',
        description: 'לירז גנון',
        level: '2',
        hideFlag: '',
      },
      {
        _id: '8731963-012-1',
        objId: '8731963',
        relat: '012',
        relObj: '1',
        description: 'אדם דרפורד ',
        level: '2',
        hideFlag: '',
      },
    ],
    subTreeSoldiersData: [
      {
        first_name: 'לירז',
        last_name: 'גנון',
        gender: {
          code: '1',
          description: 'זכר',
        },
        _id: '5491198',
        fullDetails: false,
        isPartOfTree: true,
        isCommander: true,
      },
      {
        first_name: 'אדם',
        last_name: 'דרפורד',
        gender: {
          code: '1',
          description: 'זכר',
        },
        _id: '8731963',
        fullDetails: false,
        isPartOfTree: true,
        isCommander: true,
      },
    ],
  },
];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/tree/soldier/role/tz')
  getUserRoleByTz() {
    return {
      role: 2,
    };
  }
  @Post('/tree/get/commander/groupsAndSoldiers/tz')
  getHatPermissionsByTz() {
    return {
      soldiersIds: ['5491198', '8731963'],
      groupsIds: ['1'],
    };
  }
  @Post('/group/soldierids/groupid')
  getSoldierIdsByGroupId() {
    return [
      {
        _id: '1',
        soldierIds: ['5491198', '8731963'],
      },
    ];
  }
  @Post('/tree/commander/id')
  getTreeById() {
    return mockTree;
  }
  @Post('/tree/commander/tz')
  getTreeByTz() {
    return mockTree;
  }
  @Post('/soldiers/ids')
  getPratimsByIds() {
    return soldiers;
  }
  @Post('/soldiers/tzs')
  getPratimsByTzs() {
    return soldiers;
  }
  @Post('/soldiers/groupId')
  getPratimsByGroupId() {
    return soldiers;
  }
}
