import React, { useState } from "react";
import { Layout, Upload, Avatar, Row, Col, Progress, Card, Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import "./App.css";

const { Title, Text } = Typography;
const { Sider, Content } = Layout;

export default function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const uploadProps = {
    showUploadList: false,
    beforeUpload: f => {
      const r = new FileReader();
      r.onload = e => setImageUrl(e.target.result);
      r.readAsDataURL(f);
      return false;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Sider width={300} style={{ background: "#fff", padding: 20 }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          {imageUrl ? (
            <Avatar src={imageUrl} size={120} />
          ) : (
            <Upload {...uploadProps}>
              <Avatar size={120} style={{ background: "#e6f7ff" }} icon={<UploadOutlined />} />
              <div style={{ marginTop: 8 }}>Upload</div>
            </Upload>
          )}
        </div>
        <Title level={4}>Mahammad Ashurlu</Title>
        <Text>Frontend Developer — React & UI/UX</Text>
        <div style={{ marginTop: 16 }}>
          <Text>Sumgait, Azerbaijan</Text><br/>
          <Text>ashurovmahammad1@gmail.com</Text><br/>
          <Text>github.com/maqaexx</Text><br/>
          <Text>linkedin.com/in/maqaexx</Text>
        </div>
        <div style={{ marginTop: 24 }}>
          <Title level={5}>Skills</Title>
          <Text>HTML & CSS</Text>
          <Progress percent={95} showInfo={false} />
          <Text>JavaScript</Text>
          <Progress percent={90} showInfo={false} />
          <Text>React</Text>
          <Progress percent={88} showInfo={false} />
        </div>
        <div style={{ marginTop: 24 }}>
          <Title level={5}>Languages</Title>
          <Text>Azerbaijani — Native</Text><br/>
          <Text>English — B2 Level</Text><br/>
          <Text>Turkish — Native</Text>
        </div>
        <div style={{ marginTop: 24 }}>
          <Title level={5}>Education</Title>
          <Text>Karadeniz Technical University-Faculty of Economics-Department of Econometrics(2022-2026)</Text>
        </div>
      </Sider>

      <Layout>
        <Content style={{ padding: 24 }}>
          <Card style={{ marginBottom: 20 }}>
            <Title level={3}>Profile</Title>
            <Text>
              Entry-level frontend developer with basic experience in React, HTML, CSS, and Tailwind. Eager to write clean, readable code and learn responsive design principles.
            </Text>
          </Card>

          <Card style={{ marginBottom: 20 }}>
            <Title level={3}>Experience</Title>
            <div style={{ marginBottom: 12 }}>
              <Text strong>Senior Frontend Developer — Awesome Company</Text><br/>
              <Text type="secondary">Jun 2024 – Present · Baku</Text>
              <p>Built core UI components library, improved performance by 30%, mentored junior developers and led migration to React 19.</p>
            </div>
            <div>
              <Text strong>Frontend Developer — Startup X</Text><br/>
              <Text type="secondary">Jan 2022 – May 2024 · Remote</Text>
              <p>Implemented landing pages, dashboards and interactive visualizations. Worked closely with designers to ship fast iterations.</p>
            </div>
          </Card>

          <Card style={{ marginBottom: 20 }}>
            <Title level={3}>Selected Projects</Title>
            <Row gutter={16}>
              <Col span={12}>
                <Card size="small" title="Project A">
                  A short one-line description. <a href="#">Live</a> · <a href="#">Code</a>
                </Card>
              </Col>
              <Col span={12}>
                <Card size="small" title="Project B">
                  A short one-line description. <a href="#">Live</a> · <a href="#">Code</a>
                </Card>
              </Col>
            </Row>
          </Card>

          <Card style={{ marginBottom: 20 }}>
            <Title level={3}>Certificates & Courses</Title>
            <Text>2 years of Help Desk experience at Omicron and Data-Line companies,Help Desk Certificate – Ingress Academy,Participant in KitGit Courses: HTML/CSS, JavaScript, and React</Text>
          </Card>

          <Card>
            <Title level={3}>References</Title>
            <Text>Available on request</Text>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
}
