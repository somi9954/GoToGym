import MemberOnly from '../../../components/commons/auth/MemberOnly';
const Mypage = () => {
  return (
    <MemberOnly>
      <h1>마이페이지</h1>
    </MemberOnly>
  );
};

export default Mypage;
