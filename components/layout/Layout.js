import Header from './header/Header';
import Footer from './footer/Footer';
import classes from './Layout.module.scss';

function Layout(props) {
  return (
    <div>
      <Header/>
      <main className={classes.main}>{props.children}</main>
      <Footer/>
    </div>
  );
}

export default Layout;
