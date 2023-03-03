import React,  {CSSProperties} from "react";
import { Typography, Divider, Descriptions, Button } from "antd";

const { Title, Paragraph } = Typography;

interface PropNews {
   author: string,
   publishedAt: string,
   title: string,
   url: string
   onTap: () => void
}

const StyleDetail: CSSProperties = {
  padding: '20px'
}

const DetailContent = (props: PropNews) => {

   const {author, publishedAt, title, url, onTap} = props

  return (
    <div style={StyleDetail}> 
      <Title>{author}</Title>
      <Divider />
      <Descriptions>
        <Descriptions.Item label="publishedAt">
          {publishedAt}
        </Descriptions.Item>
      </Descriptions>
      <Paragraph>
        {title}
        <a style={{ marginLeft: "5px" }} href={url} target="_blank">
          Baca Selengkapnya...
        </a>
      </Paragraph>
      <Button onClick={onTap}>Kembali</Button>
    </div>
  );
};

export default DetailContent;
