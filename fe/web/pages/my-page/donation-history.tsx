import { CardList } from '@/components/funding/CardList';
import HeaderHome from '@/components/HeaderHome';
import { useEffect, useState } from 'react';
import { participatedList } from '@/api/userAxois';
import styles from '@/styles/user.module.scss';

interface fundingType {
  currentAmount: number;
  facilityImage: string;
  facilityName: string;
  fundingFinishDate: string | null;
  fundingId: number;
  fundingOpenDate: string;
  fundingPeopleCnt: number;
  fundingTitle: string;
  goalAmount: number;
}
// interface stateType {
//   fundings: fundingType[];
// }

export default function DonationHistory() {
  const [fundingInfo, setFundingInfo] = useState<fundingType[]>([
    {
      currentAmount: 725700,
      facilityImage:
        'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200124_169%2F1579861444105ksyLS_JPEG%2FHR80O6nA89Q9ZWBHq4KZQL_-.jpeg.jpg',
      facilityName: '은혜노인복지센터',
      fundingFinishDate: null,
      fundingId: 1,
      fundingOpenDate: '2024-04-01 00:00:00',
      fundingPeopleCnt: 4,
      fundingTitle: '은혜노인복지센터 식사 지원',
      goalAmount: 817600,
    },
  ]);
  useEffect(() => {
    async function getData() {
      const fundinagVal = await participatedList();
      console.log(fundinagVal.data);
      fundinagVal.data != undefined ? setFundingInfo(fundinagVal.data) : '';
    }
    getData();
  }, []);

  return (
    <>
      <HeaderHome>내가 이어졌던 흔적들 이라고하면 이상한가?</HeaderHome>
      <div className={styles.fundingListBox}>
        <CardList fundingList={fundingInfo} isOngoing={false} />
      </div>
    </>
  );
}