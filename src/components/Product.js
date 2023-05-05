import { Button,Grid,Text, Card, Row} from "@nextui-org/react";

function List(){
    
    const Details =({detail}) => {
    return (
        <Grid xs={12}>
      <Card style={{width:'100%'}}>
      <Card.Header>
      <Grid.Container css={{ pl: "$6" }}>
      <Grid xs={12}>
            <Text h4>{detail.title}</Text>
        </Grid><Grid xs={12}>
            <Text css={{ color: "$accents8" }}>{detail.subTitle}</Text>
        </Grid>
        </Grid.Container>
         </Card.Header>
      <Card.Body>
          <Text h6 size={15} css={{ mt: 0 }}>
            {detail.content}
          </Text>
        </Card.Body>
        <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button onClick={() =>window.location.href=detail.url} size="sm" auto>
                前往
              </Button>
            </Row>
          </Card.Footer>
      </Card></Grid>
    );
  };
    
    const products = [
     { title: 'Gestar Drive', subTitle:'极星云盘', id: 1,content:'Gestar Drive 是一个快速、安全、灵活的云存储平台，采用 NVME 固态硬盘，提供不限下载速度；数据全部加密，备份每天进行，保证用户数据安全；无会员制度，按实际使用容量付费，支持私人节点部署，可隔离私人秘密数据。',url:'https://drive.gestar.cloud'}
     ];
    const listItems = products.map(product =>
    <div key={product.id}>
        <Details detail={product}/>
    </div>
    );
    return(
    <Grid.Container gap={2} justify="center">
    <Grid.Container css={{ pl: "$6" }}>
      {listItems}
      </Grid.Container>
    </Grid.Container>
  );
    
}

export default function Product(){
    return(
        <div style={{marginTop:'5%'}}>
        <Text h3>我们的服务</Text>
        <List/>
        </div>
    );
}