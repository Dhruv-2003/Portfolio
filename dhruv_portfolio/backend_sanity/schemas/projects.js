export default {
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string',
        },
      ],
    },
    {
      name: 'hackathon',
      title: 'Hackathon',
      type: 'string',
    },
    {
      name: 'bounties',
      title: 'Bounties',
      type: 'array',
      of: [
        {
          name: 'bounty',
          title: 'Bounty',
          type: 'string',
        },
      ],
    },
    {
      name: 'protocols',
      title: 'Protocol',
      type: 'array',
      of: [
        {
          name: 'protocol',
          title: 'Protocol',
          type: 'string',
        },
      ],
    },
  ],
}
