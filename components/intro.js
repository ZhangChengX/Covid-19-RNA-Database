import { Card, Row, Col } from 'antd';


function Intro () {
	return (
		<Card title="Introduction" className="light-border">
			<Row>
				<Col span={16}>
			        <p>
			        	Majority of our human genome do not transcribe into protein-coding RNAs (mRNAs), instead, will transcribe into non-coding RNAs, which do not encode protein. 
			        </p>
			        <p>
			        	Non-coding RNAs, including long noncoding <i>linear</i> RNAs (lncRNAs) and <i>circular</i> RNAs (circRNAs), have been found as important host factors in regulating antiviral or proviral processes during viral infection. 
			        </p>
			        <p>
			        	To facilitate exploring the functions of lncRNAs and circRNAs in COVID19 for diagnosis and therapy, here, we develop a dataset of human lncRNAs and circRNAs in response to SARS-CoV-2 infection across over 300 COVID19 patients and over 40 tissues and cell lines.
			        </p>
	        	</Col>
	        	<Col span={1}>
	        	</Col>
	        	<Col span={5}>
	        		<img src="/images/ncRNAs_CoV2_illustration.jpg" style={{width:'100%'}} />
	        	</Col>
	        	<Col span={2}>
	        	</Col>
	        </Row>
		</Card>
	);
}

export default Intro;