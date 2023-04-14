import "./App.css";
import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("버튼이 클릭됨");
  };
  return (
    <>
      <button onClick={handleClick}>Click</button>
      <Avatar
        image="https://images.unsplash.com/photo-1531469535976-c6fc3604014f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8JUVDJTg0JUIxJUVDJTlEJUI4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1531469535976-c6fc3604014f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8JUVDJTg0JUIxJUVDJTlEJUI4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        name="James Kim"
        title="프론트엔드 개발자"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJTg0JUIxJUVDJTlEJUI4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        name="Anna Young"
        title="백엔드 개발자"
      />
      <Profile
        image="https://images.unsplash.com/photo-1610629737680-8a6daf3dadf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fCVFQyU4NCVCMSVFQyU5RCVCOHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        name="Bob Yu"
        title="프론트엔드 개발자"
      />
    </>
  );
}

export default AppProfile;
