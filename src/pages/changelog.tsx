import React from 'react';
import Layout from '@/components/layout';
import GatsbyLink from '@/components/gatsby-link';
import { UnorderedList, ListItem, Heading, Wrap, Text } from '@chakra-ui/react';
import Entry from "@/components/entry"


const Changelog = ( ) => {
  return (
    <Layout>
      <Heading as="h2">Changelog</Heading>
      <UnorderedList>
        <Entry title="新增近期 Now" description="主頁加了最近聽的音樂、看的電影和書籍，最方便的是自動從 Spotify 、Letterboxd 等平台更新，毋須自動。有興趣的話可看" date="2021-08-13" commit="15517d5b1c4dd6598ebd53818ea3260e02197b57"/>
        <Entry title="訂閱網誌" description="新增表格" date="2021-07-17" commit="8aee3c82c082b0d8d49d69bbd027d73ca4afafee"/>
        <Entry title="科技頁" description="側欄的 Navigation 新增了科技頁，集合所有關於製作這網站、科技等的文章。" date="2021-07-17" commit="4a5170d0c58fcb6492a246a0d69b4cf8e3b76fa9"/>
        <Entry title="v2.0" description="Gatsby版本的第一代網誌差不多已用了一年，這次設計改動很小，基本上沿用原來設計再作修改。現在支援 Dark Mode 來了，左方 Sidebar 可自由轉換 Light Mode 和 Dark Mode。另外，因 Chakra UI 支援不同 button 的 state 變得更易辨認，UX 和 Accessibility 也有改善。最後，更新到 Gatsby v3，圖片和網站的載入速度增加了" date="2021-07-03" commit="03ce8480332109f5d2f663c5e770f03b48664ec0" />
        <Entry title="Habit Page" description="Gatsby版本的第一代網誌差不多已用了一年，這次設計改動很小，基本上沿用原來設計再作修改。現在支援 Dark Mode 來了，左方 Sidebar 可自由轉換 Light Mode 和 Dark Mode。另外，因 Chakra UI 支援不同 button 的 state 變得更易辨認，UX 和 Accessibility 也有改善。最後，更新到 Gatsby v3，圖片和網站的載入速度增加了" date="2021-07-03" commit="03ce8480332109f5d2f663c5e770f03b48664ec0" />
        <Entry title="v1.0" description="Gatsby版本的第一代網誌差不多已用了一年，這次設計改動很小，基本上沿用原來設計再作修改。現在支援 Dark Mode 來了，左方 Sidebar 可自由轉換 Light Mode 和 Dark Mode。另外，因 Chakra UI 支援不同 button 的 state 變得更易辨認，UX 和 Accessibility 也有改善。最後，更新到 Gatsby v3，圖片和網站的載入速度增加了" date="2021-07-03" commit="03ce8480332109f5d2f663c5e770f03b48664ec0" />
      </UnorderedList>
    </Layout>
  )
};

export default Changelog;
