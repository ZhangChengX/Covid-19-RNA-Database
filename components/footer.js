import { Divider, BackTop } from 'antd';


function Footer() {
  return (
  	<>
	  	<Divider dashed />
	  	<div style={{textAlign:'center'}}>
	  		Copyright &copy; 2021
	  	</div>
	  	<BackTop />
  	</>
  );
}

export default Footer;
