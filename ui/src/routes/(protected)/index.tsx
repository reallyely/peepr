import { Button } from "@kobalte/core/button";
import { A } from "@solidjs/router";
import type { Component } from "solid-js";
import { Card, CardContent } from "~/components/card";

const Index: Component = () => {
  return (
    <main>
      <Card>
        <CardContent><A href="/integration"><Button>Go to Integration</Button></A></CardContent>
      </Card>
    </main>
  )
}

export default Index;
