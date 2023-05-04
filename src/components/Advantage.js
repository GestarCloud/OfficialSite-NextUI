import { Text, Grid, Card } from "@nextui-org/react";

function List(){
    
    const Details =({ detail}) => {
    return (
      <Card variant="bordered"  >
      <Card.Header>
            <Text b>{detail.title}</Text>
         </Card.Header>
        <Card.Divider/>
      <Card.Body>
          <Text h6 size={15} css={{ mt: 0 }}>
            {detail.content}
          </Text>
        </Card.Body>
      </Card>
    );
  };
    
    const advantages = [
     { title: '7x24小时服务', id: 1,content:'我们的客服团队全天候提供技术支持，无论何时您都可以随时联系我们。'},
     { title: '强大的集群', id: 2,content:'我们拥有多台高性能服务器，支持快速部署和横向扩展，保证您的业务稳定运行。'},
     { title: '安全可靠', id: 3,content:'我们采用严格的安全措施，包括硬件防护、软件防护和数据加密，保障您的数据安全。'}
    ];
    const listItems = advantages.map(advantage =>
    <Grid xs={4} key={advantage.id}>
        <Details detail={advantage}/>
    </Grid>
    );
    return(
    <Grid.Container gap={2} justify="center">
      {listItems}
    </Grid.Container>
  );
    
}

export default function Advantage(){
    return(
        <div style={{marginTop:'5%'}}>
        <Text h3>我们的优势</Text>
        <Text>我们致力于为客户提供最好的服务，以下是我们的优势：</Text>   
        <List/>
        </div>
    );
}