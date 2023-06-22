import unified from 'unified';

// ...

export const markdownToHtml = async (content: string): Promise<string> => {
  const data = await unified().use(remarkHtml).process(content);
  return String(data.contents);
};
