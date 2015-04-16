import Dependencies._
import com.typesafe.sbt.SbtNativePackager._
import play.PlayScala
import play.twirl.sbt.Import._
import sbt.Keys._
import sbt._

trait Prototypes {

  val frontendCompilationSettings = Seq(

    organization := "de.weltn24.funkotron",
    version := VersionInfo.buildNumber.value,

    maxErrors := 5,
    javacOptions := Seq("-g","-encoding", "utf8"),
    scalacOptions := Seq("-unchecked", "-optimise", "-deprecation", "-target:jvm-1.8",
      "-Xcheckinit", "-encoding", "utf8", "-feature", "-Yinline-warnings","-Xfatal-warnings"),
    doc in Compile <<= target.map(_ / "none"),
    scalaVersion := "2.11.4",
    initialize := {
      val _ = initialize.value
      assert(sys.props("java.specification.version") == "1.8",
        "Java 8 is required for this project.")
    }

  )

  val frontendDependencyManagementSettings = Seq(
    ivyXML :=
      <dependencies>
        <exclude org="commons-logging"><!-- Conflicts with jcl-over-slf4j in Play. --></exclude>
        <exclude org="org.springframework"><!-- Because I don't like it. --></exclude>
      </dependencies>,

    resolvers := Seq(
      Resolver.typesafeRepo("releases"),
      Classpaths.typesafeReleases,
      "Akka" at "http://repo.akka.io/releases"
    )
  )

  val frontendClientSideSettings = Seq(
    /** default package imports for all twirl templates, make sure they exist ;) */
    TwirlKeys.templateImports ++= Seq(
      "assets._",
      "common._",
      "models._",
      "views.support._",
      "conf._",
      "play.api.Play",
      "play.api.Play.current"
    )
  )

  val frontendTestSettings = Seq(
    // Use ScalaTest https://groups.google.com/d/topic/play-framework/rZBfNoGtC0M/discussion
    testOptions in Test := Nil,

    concurrentRestrictions in Global += Tags.limit(Tags.Test, 2),

    // Copy unit test resources https://groups.google.com/d/topic/play-framework/XD3X6R-s5Mc/discussion
    unmanagedClasspath in Test <+= baseDirectory map { bd => Attributed.blank(bd / "test") },

    libraryDependencies ++= Seq(
      scalaTest,
      mockito
    ),

    // These settings are needed for forking, which in turn is needed for concurrent restrictions.
    javaOptions in Test += "-DAPP_SECRET=this_is_not_a_real_secret_just_for_tests",
    javaOptions in Test += "-Xmx2048M",
    javaOptions in Test += "-XX:+UseConcMarkSweepGC",
    javaOptions in Test += "-XX:ReservedCodeCacheSize=128m",
    baseDirectory in Test := file(".")
  )

  val frontendMonitoringSettings = Seq(
    libraryDependencies ++= Seq(
      "com.kenshoo" %% "metrics-play" % "2.3.0_0.1.8"
    )
  )

  def root() = Project("root", base = file(".")).enablePlugins(PlayScala).settings(VersionInfo.settings:_*)

  /** simple wrapper for creating new projects */
  def application(applicationName: String) = {
    Project(applicationName, file(applicationName)).enablePlugins(play.PlayScala)
      .settings(frontendDependencyManagementSettings:_*)
      .settings(frontendCompilationSettings:_*)
      .settings(frontendClientSideSettings:_*)
      .settings(frontendTestSettings:_*)
      .settings(frontendMonitoringSettings:_*)
      .settings(VersionInfo.settings:_*)
      .settings(
        libraryDependencies ++= Seq(
          commonsIo
        )
      )
      .settings(name in Universal := applicationName)
  }
}
