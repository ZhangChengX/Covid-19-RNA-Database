import React from 'react'
import { Card, Table, Button, Radio } from 'antd';

import { DownloadOutlined } from '@ant-design/icons';

const dataSource = [
  {
    key: '1',
    id: '1',
    species: 'human',
    molecular: 'IncRNA',
    cell_tissue: 'K562',
    geo_database: 'GSE12345',
    chromsome: 'chr10',
    start_0_based: 100206817,
    end_1_based: 100208262,
    transcript_id: 'TCONS_00002344',
    expression_level:  0.5,
    strand: '+',
    no_of_exons: 1,
    exon_sizes: '1445,',
    exon_relative_coordiante: '0,',
    locus_id: 'XLOC_000648',
    annoated_or_not: 'Novel',
    conserved: 'N',
    genomic_feature: 'divergent',
    related_annoated_gene: 'DDX58',
    putative_function: 'RLR signaling',
    gene_ontology: 'viral process: GO:0016032',
    fdr: 0.025,
    foldchange: 1.5
  },
];
for (let i = 2; i < 100; i++) {
  dataSource.push({
    key: i,
    id: i,
    species: 'human',
    molecular: 'IncRNA',
    cell_tissue: 'K562',
    geo_database: 'GSE12345',
    chromsome: 'chr10',
    start_0_based: 100206817,
    end_1_based: 100208262,
    transcript_id: 'TCONS_00002344',
    expression_level:  0.5,
    strand: '+',
    no_of_exons: 1,
    exon_sizes: '1445,',
    exon_relative_coordiante: '0,',
    locus_id: 'XLOC_000648',
    annoated_or_not: 'Novel',
    conserved: 'N',
    genomic_feature: 'divergent',
    related_annoated_gene: 'DDX58',
    putative_function: 'RLR signaling',
    gene_ontology: 'viral process: GO:0016032',
    fdr: 0.025,
    foldchange: 1.5
  });
}

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'Species',
    dataIndex: 'species',
    key: 'species',
    sorter: (a, b) => a.species > b.species,
  },
  {
    title: 'Molecular',
    dataIndex: 'molecular',
    key: 'molecular',
    sorter: (a, b) => a.molecular > b.molecular,
  },
  {
    title: 'Cell / Tissue',
    dataIndex: 'cell_tissue',
    key: 'cell_tissue',
    sorter: (a, b) => a.molecular > b.molecular,
  },
  {
    title: 'Dataset (GEO)',
    dataIndex: 'geo_database',
    key: 'geo_database',
    sorter: (a, b) => a.dataset > b.dataset,
  },
  {
    title: 'Chromsome',
    dataIndex: 'chromsome',
    key: 'chromsome',
    sorter: (a, b) => a.dataset > b.dataset,
  },
  {
    title: 'Start (0-based)',
    dataIndex: 'start_0_based',
    key: 'start_0_based',
    sorter: (a, b) => a.dataset > b.dataset,
  },
  {
    title: 'End (1-based)',
    dataIndex: 'end_1_based',
    key: 'end_1_based',
    sorter: (a, b) => a.dataset > b.dataset,
  },
  {
    title: 'Transcript ID',
    dataIndex: 'transcript_id',
    key: 'transcript_id',
    sorter: (a, b) => a.dataset > b.dataset,
  },
  {
    title: 'Expression Level',
    dataIndex: 'expression_level',
    key: 'expression_level',
    sorter: (a, b) => a.dataset > b.dataset,
  },
  {
    title: 'Strand',
    dataIndex: 'strand',
    key: 'strand',
    sorter: (a, b) => a.dataset > b.dataset,
  },
  {
    title: 'No. of exons',
    dataIndex: 'no_of_exons',
    key: 'no_of_exons',
    sorter: (a, b) => a.dataset > b.dataset,
  },
  {
    title: 'Exon Sizes',
    dataIndex: 'exon_sizes',
    key: 'exon_sizes',
    sorter: (a, b) => a.dataset > b.dataset,
  },
  {
    title: 'Exon Relative Coordiante',
    dataIndex: 'exon_relative_coordiante',
    key: 'exon_relative_coordiante',
    sorter: (a, b) => a.dataset > b.dataset,
  },
  {
    title: 'Locus ID',
    dataIndex: 'locus_id',
    key: 'locus_id',
    sorter: (a, b) => a.dataset > b.dataset,
  },
  {
    title: 'Annoated or not',
    dataIndex: 'annoated_or_not',
    key: 'annoated_or_not',
    sorter: (a, b) => a.dataset > b.dataset,
  },
  {
    title: 'Conserved',
    dataIndex: 'conserved',
    key: 'conserved',
    sorter: (a, b) => a.dataset > b.dataset,
  },
  {
    title: 'Genomic Feature',
    dataIndex: 'genomic_feature',
    key: 'genomic_feature',
    sorter: (a, b) => a.dataset > b.dataset,
  },
  {
    title: 'Related annoated gene',
    dataIndex: 'related_annoated_gene',
    key: 'related_annoated_gene',
    sorter: (a, b) => a.dataset > b.dataset,
  },
  {
    title: 'Putative Function (KEGG)',
    dataIndex: 'putative_function',
    key: 'putative_function',
    sorter: (a, b) => a.dataset > b.dataset,
  },
  {
    title: 'Gene Ontology',
    dataIndex: 'gene_ontology',
    key: 'gene_ontology',
    sorter: (a, b) => a.dataset > b.dataset,
  },
  {
    title: 'FDR',
    dataIndex: 'fdr',
    key: 'fdr',
    sorter: (a, b) => a.dataset > b.dataset,
  },
  {
    title: 'Foldchange',
    dataIndex: 'foldchange',
    key: 'foldchange',
    sorter: (a, b) => a.dataset > b.dataset,
  },
];


class Search extends React.Component {

  constructor(props){
    super(props);
    this.state = {downloadFileType: "csv"};
  }

	render() {

    const downloadCheckBoxOnChange = (e) => {
      // console.log(e.target.value);
      this.setState({
        downloadFileType: e.target.value
      });
    };

    const downloadBtnOnClick = (e) => {
      console.log(this.state.downloadFileType);
    };
		
		return (
			<Card title="Searching Result" className="data-search light-border">
        <div className="download-box">
          <Radio.Group onChange={downloadCheckBoxOnChange} value={this.state.downloadFileType}>
            <Radio value={"csv"}>csv</Radio>
            <Radio value={"txt"}>txt</Radio>
          </Radio.Group>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} onClick={downloadBtnOnClick} ghost>
            Download
          </Button>
        </div>
				<Table dataSource={dataSource} columns={columns} pagination={{defaultPageSize:20}} scroll={{ x: 1500 }} />
			</Card>
		);
	}
}

export default Search;
