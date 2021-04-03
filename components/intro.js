import { Card, Row, Col } from 'antd';


function Intro () {
	return (
		<Row className="intro_row">
			<Col span={18}>
				<Card title="Introduction" className="">
			        <p>
			        	Majority of our human genome do not transcribe into protein-coding RNAs (mRNAs), instead, will transcribe into non-coding RNAs, which do not encode protein. 
			        </p>
			        <p>
			        	Non-coding RNAs, including long noncoding <i>linear</i> RNAs (lncRNAs) and <i>circular</i> RNAs (circRNAs), have been found as important host factors in regulating antiviral or proviral processes during viral infection. 
			        </p>
			        <p>
			        	To facilitate exploring the functions of lncRNAs and circRNAs in COVID-19 for diagnosis and therapy, here, we develop a dataset of human lncRNAs and circRNAs in response to SARS-CoV-2 infection across over 300 COVID-19 patients and over 40 tissues and cell lines.
			        </p>
				</Card>
			</Col>
			<Col span={6}>
				<div className="featured_img">
					<span className="vertical-align-helper"></span>
	        		<img src="/images/ncRNAs_CoV2_illustration.jpg" />
	        	</div>
	        </Col>
		</Row>
	);
}

export default Intro;