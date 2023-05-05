import { Navbar, Button, Link, Text } from "@nextui-org/react";

export default function AppBar() {
  return (
     <Navbar isBordered variant='static'>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            GESTAR CLOUD
          </Text>
        </Navbar.Brand>
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
