resolvers += "Typesafe repository" at "https://repo.typesafe.com/typesafe/releases/"

resolvers += Classpaths.sbtPluginReleases

// The Play plugin
addSbtPlugin("com.typesafe.play" % "sbt-plugin" % "2.3.8")

// Scoverate plugin
addSbtPlugin("org.scoverage" % "sbt-scoverage" % "1.0.4")

// Scala Style
addSbtPlugin("org.scalastyle" %% "scalastyle-sbt-plugin" % "0.6.0")

// New Relic
addSbtPlugin("com.gilt.sbt" % "sbt-newrelic" % "0.0.3")
