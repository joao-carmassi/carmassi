import slugify from 'slugify';

const slugifyPathern = (item: string) => {
  return slugify(item, { strict: true, lower: true });
};

export default slugifyPathern;
