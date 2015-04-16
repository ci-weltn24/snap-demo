import java.net.InetAddress
import java.time.ZonedDateTime
import java.time.format.DateTimeFormatter
import java.util

import sbt.Keys._
import sbt._

object VersionInfo extends Plugin {

  implicit def string2Dequote(s: String) = new {
    lazy val dequote = s.replace("\"", "")
  }

  val branch = SettingKey[String]("version-branch")
  val buildNumber = SettingKey[String]("version-build-number")
  val vcsNumber = SettingKey[String]("version-vcs-number")

  private val env: util.Map[String, String] = System.getenv()
  override val settings = if (env.containsKey("IS_SNAP")) {
    Seq(
      buildNumber := s"0.1.${env.get("SNAP_PIPELINE_COUNTER")}-${env.get("SNAP_COMMIT_SHORT")}-SNAPSHOT",
      branch := env.get("SNAP_BRANCH"),
      vcsNumber := env.get("SNAP_COMMIT"),
      resourceGenerators in Compile <+= (resourceManaged in Compile, branch, buildNumber, vcsNumber, streams) map buildFile
    )
  } else if (env.containsKey("JENKINS_URL")) {
    // jenkins
    Seq(
      buildNumber := s"0.1.0-${env.get("GIT_COMMIT").substring(0, 10)}-SNAPSHOT",
      branch := env.get("GIT_BRANCH"),
      vcsNumber := env.get("GIT_COMMIT"),
      resourceGenerators in Compile <+= (resourceManaged in Compile, branch, buildNumber, vcsNumber, streams) map buildFile
    )
  } else {
    // dev
    Seq(
      buildNumber := "funkotron-DEV",
      branch := "DEV",
      vcsNumber := "DEV",
      resourceGenerators in Compile <+= (resourceManaged in Compile, branch, buildNumber, vcsNumber, streams) map buildFile
    )
  }


  def buildFile(outDir: File, branch: String, buildNum: String, vcsNum: String, s: TaskStreams) = {
    val versionInfo = Map(
      "Revision" -> vcsNum.dequote.trim,
      "Branch" -> branch.dequote.trim,
      "Build" -> buildNum.dequote.trim,
      "Date" -> ZonedDateTime.now().format(DateTimeFormatter.ISO_INSTANT),
      "BuiltBy" -> System.getProperty("user.name", "<unknown>"),
      "BuiltOn" -> InetAddress.getLocalHost.getHostName)

    val versionFileContents = (versionInfo map { case (x, y) => x + "=" + y }).toList.sorted

    val versionFile = outDir / "version.txt"
    s.log.debug("Writing to " + versionFile + ":\n   " + versionFileContents.mkString("\n   "))

    IO.write(versionFile, versionFileContents mkString "\n")

    Seq(versionFile)
  }
}
