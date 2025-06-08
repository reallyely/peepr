import { A } from "@solidjs/router";
import type { Component } from "solid-js";
import { Card, CardContent, CardHeader } from "~/components/Card";
import Button from "~/components/form/Button";

const Index: Component = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <h1>Welcome to Peepr</h1>
        </CardHeader>
        <CardContent class="flex flex-col items-center gap-4">
          <div>
            <p>Peepr is a tool to help you track your pull requests across your organization.</p>
            <p>Get insights into PR statistics, CI/CD metrics, and development velocity.</p>
          </div>

          <A href="/repositories" class="no-decoration">
            <Button variant="primary" size="lg">
              Choose Repository
            </Button>
          </A>

          <p class="text-sm text-secondary">
            Select a repository to start tracking pull request metrics and CI/CD performance.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Index;
