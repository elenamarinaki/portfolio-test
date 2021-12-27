import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'rq4e9768',
  dataset: 'production',
  apiVersion: '2021-08-31',
  useCdn: false,
});
