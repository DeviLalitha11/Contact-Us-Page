import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="https://dosomecoding.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.74a180a6.png&w=1080&q=75" alt="do some coding logo" height={100} />
      </div>

      <ul>
        <li>Home</li><br></br>
        <li>About</li><br></br>
        <li>Contact</li><br></br>
      </ul>
    </nav>
  );
};

export default Navigation;