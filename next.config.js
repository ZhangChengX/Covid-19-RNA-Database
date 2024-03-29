const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      env: {
      	URL: 'http://localhost:3000',
        TITLE: 'Noncoding-CoV'
      }
    }
  } else {
	  return {
	    /* config options for all phases except development here */
	    env: {
	      	URL: 'http://localhost:3000',
          TITLE: 'Noncoding-CoV'
	      }
	  }
  }
}
