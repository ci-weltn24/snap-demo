import play.Play.autoImport._
import sbt.Keys._
import sbt._

object Frontend extends Build with Prototypes {

  val common = application("common").settings(
    libraryDependencies ++= Seq(
      cache,
      filters,
      ws,
      Dependencies.commonsIo,
      Dependencies.guice,
      Dependencies.inject,
      Dependencies.jSoup
    )
  )
    .settings(publish := { })
    .settings(
      scalacOptions in Test ++= Seq("-Yrangepos")
    )

  def withTests(project: Project) = project % "test->test;compile->compile"

  val commonWithTests = withTests(common)

  val article = application("article").dependsOn(commonWithTests).aggregate(common).settings(publish := { })

  val dev = application("dev-build")
    .dependsOn(withTests(article))
    .aggregate(article)

  //val prod = application("prod-build")
  //  .dependsOn(withTests(article))

  val main = root().aggregate(
    common,
    article
  )

}
