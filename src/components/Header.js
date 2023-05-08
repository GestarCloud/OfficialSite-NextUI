import { Navbar, Button, Link, Text } from "@nextui-org/react";

export default function AppBar() {
  return (
     <Navbar isBordered variant='sticky'>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            GESTAR CLOUD
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="https://status.gestar.drive">监控</Navbar.Link>
         </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat as={Link} onClick={() =>window.location.href='https://app.gestar.cloud/'}>
              用户中心
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
  );
}
