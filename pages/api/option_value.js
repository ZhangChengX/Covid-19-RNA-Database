// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
	res.status(200).json(
		{
		  "species": [
		    "Human",
		    "Mouse"
		    ],
		  "molecular": [
		    "LncRNA",
		    "CircRNA"
		    ],
		  "dataset_geo": [
			"GSE163688",
			"GSE159717",
			"GSE161777",
			"GSE154998",
			"GSE154244",
			"GSE166253",
			"GSE157859",
			"GSE157103",
			"GSE167000",
			"GSE150316",
			"GSE155241",
			"GSE161731",
			"GSE164332",
			"GSE155518",
			"GSE155286",
			"GSE157055",
			"GSE154613",
			"GSE151803",
			"GSE152586"
		  ],
		  "conserved": [
		  "Yes",
		  "NA"
		  ],
		  "annotation_genomic_location": [
		    "Divergent (LncRNA)",
		    "Sense (LncRNA)",
		    "Antisense (LncRNA)",
		    "Intergenic (LncRNA)",
		    "Exonic (CircRNA)",
		    "Intronic (CircRNA)",
		    "Intergenic (CircRNA)",
		    "Antisense (circRNAs)",
		    "Others (CircRNA)"
		   ],
		  "cell_tissue" : [
		    "Saliva",
		    "plasma",
		    "lung",
			"heart",
			"jejunum",
			"liver",
			"kidney",
			"bowel",
			"fat"
		    ]
		}
  	)
}
