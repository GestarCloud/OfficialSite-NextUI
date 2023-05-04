import { Container, Card, Row, Text, Button } from "@nextui-org/react";

export default function Banner() {
  return (
      <>
      <div>
 <Text
      h1
      size={50}
      css={{
        textGradient: "45deg, $blue600 -20%, $pink600 50%",
      }}
      weight="bold"
    >
      Gestar Cloud 助您
    </Text>
    <Text
      h1
      size={50}
      css={{
        textGradient: "45deg, $yellow600 -20%, $red600 100%",
      }}
      weight="bold"
    >
      即刻上云
    </Text>
    </div>
    <Text color="#7E868C" h3>极星云是下一代服务商，致力于提供创新、方便、亲民、低价的云服务。</Text>
    <Button color="primary" auto flat herf="https://app.gestar.cloud/">
          进入控制面板
        </Button>
</>
  );
}
