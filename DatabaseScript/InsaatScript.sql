USE [master]
GO
/****** Object:  Database [Insaat]    Script Date: 13.04.2022 01:55:13 ******/
CREATE DATABASE [Insaat]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Insaat', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Insaat.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'Insaat_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Insaat_log.ldf' , SIZE = 8384KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Insaat] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Insaat].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Insaat] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Insaat] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Insaat] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Insaat] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Insaat] SET ARITHABORT OFF 
GO
ALTER DATABASE [Insaat] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Insaat] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Insaat] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Insaat] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Insaat] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Insaat] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Insaat] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Insaat] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Insaat] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Insaat] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Insaat] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Insaat] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Insaat] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Insaat] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Insaat] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Insaat] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Insaat] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Insaat] SET RECOVERY FULL 
GO
ALTER DATABASE [Insaat] SET  MULTI_USER 
GO
ALTER DATABASE [Insaat] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Insaat] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Insaat] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Insaat] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [Insaat] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Insaat] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'Insaat', N'ON'
GO
ALTER DATABASE [Insaat] SET QUERY_STORE = OFF
GO
USE [Insaat]
GO
/****** Object:  User [zeycan]    Script Date: 13.04.2022 01:55:13 ******/
CREATE USER [zeycan] FOR LOGIN [zeycan] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [StajyerAksam1]    Script Date: 13.04.2022 01:55:13 ******/
CREATE USER [StajyerAksam1] WITHOUT LOGIN WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [devuser]    Script Date: 13.04.2022 01:55:13 ******/
CREATE USER [devuser] WITHOUT LOGIN WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [CompanyOwner]    Script Date: 13.04.2022 01:55:13 ******/
CREATE USER [CompanyOwner] WITHOUT LOGIN WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  DatabaseRole [Stajyerler]    Script Date: 13.04.2022 01:55:13 ******/
CREATE ROLE [Stajyerler]
GO
ALTER ROLE [Stajyerler] ADD MEMBER [StajyerAksam1]
GO
ALTER ROLE [db_datareader] ADD MEMBER [devuser]
GO
ALTER ROLE [db_datawriter] ADD MEMBER [devuser]
GO
ALTER ROLE [db_owner] ADD MEMBER [CompanyOwner]
GO
/****** Object:  UserDefinedFunction [dbo].[AuthenticateUser]    Script Date: 13.04.2022 01:55:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE FUNCTION [dbo].[AuthenticateUser](@Username varchar(50), @Password varchar(50))
RETURNS tinyint

as
BEGIN
	
	DECLARE @isSuccess tinyint
	DECLARE @chr char(1) = char(39) -- özel karakter, ' karakterini temsil ediyor

	IF @Password LIKE '%' + @chr + '%'
	-- INJECTION VARSA DIREKT HATAYA DUSUR
	BEGIN
		SET @isSuccess = 1

	END
	ELSE
	-- INJECTION YOKSA SIFREYI KONTROL ET
	BEGIN
		IF EXISTS	-- asagıdaki user / pass varsa cevap olumlu yani 1
		(SELECT EmployeeID
		FROM Employee WHERE Username = @Username AND Password = @Password
		)
			BEGIN
				SET @isSuccess = 1
			END
		ELSE	-- exists değilse cevap 0
			BEGIN
				SET @isSuccess = 0
			END
	END
	RETURN @isSuccess
END
GO
/****** Object:  UserDefinedFunction [dbo].[SatinAlmaAdedi]    Script Date: 13.04.2022 01:55:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE FUNCTION [dbo].[SatinAlmaAdedi](@CustomerID int)
RETURNS int

AS

BEGIN
	DECLARE @TotalSales as integer
	SET @TotalSales = 0

	SELECT @TotalSales = COUNT(*)
	FROM Sales
	WHERE CustomerID = @CustomerID

	RETURN @TotalSales
END
GO
/****** Object:  Table [dbo].[FlatType]    Script Date: 13.04.2022 01:55:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FlatType](
	[FlatTypeID] [int] IDENTITY(1,1) NOT NULL,
	[FlatTypeName] [varchar](50) NULL,
	[CreationDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
 CONSTRAINT [PK_FlatType] PRIMARY KEY CLUSTERED 
(
	[FlatTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Flat]    Script Date: 13.04.2022 01:55:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Flat](
	[FlatID] [int] IDENTITY(1,1) NOT NULL,
	[FlatNo] [varchar](50) NULL,
	[ProjectID] [int] NULL,
	[FlatTypeID] [int] NULL,
	[FlatStatusID] [int] NULL,
	[Price] [money] NULL,
	[CreationDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
 CONSTRAINT [PK_ProjectID] PRIMARY KEY CLUSTERED 
(
	[FlatID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  UserDefinedFunction [dbo].[DaireListesi]    Script Date: 13.04.2022 01:55:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE FUNCTION [dbo].[DaireListesi](@ProjectID int, @FlatStatusID int)
RETURNS TABLE 

AS 

	RETURN 
		SELECT Flat.FlatNo, FlatType.FlatTypeName  
		FROM Flat
		LEFT JOIN FlatType ON FlatType.FlatTypeID = Flat.FlatTypeID
		WHERE ProjectID = @ProjectID AND FlatStatusID = @FlatStatusID
GO
/****** Object:  Table [dbo].[City]    Script Date: 13.04.2022 01:55:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[City](
	[CityID] [int] IDENTITY(1,1) NOT NULL,
	[CityName] [varchar](50) NULL,
	[CreationDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
 CONSTRAINT [PK_City] PRIMARY KEY CLUSTERED 
(
	[CityID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 13.04.2022 01:55:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[CustomerID] [int] IDENTITY(1,1) NOT NULL,
	[CustomerName] [varchar](50) NULL,
	[CustomerSurname] [varchar](50) NULL,
	[GSM] [varchar](50) NULL,
	[BirthDate] [date] NULL,
	[TC] [char](11) NULL,
	[EMail] [varchar](50) NULL,
	[Address] [varchar](50) NULL,
	[GenderID] [int] NULL,
	[CityID] [int] NULL,
	[CustomerNo] [varchar](50) NULL,
	[IncomeTypeID] [int] NULL,
	[CreationDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[CustomerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CustomerRequest]    Script Date: 13.04.2022 01:55:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerRequest](
	[CustomerRequestID] [int] IDENTITY(1,1) NOT NULL,
	[CustomerID] [int] NULL,
	[FlatTypeID] [int] NULL,
	[CreationDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
 CONSTRAINT [PK_CustomerRequest] PRIMARY KEY CLUSTERED 
(
	[CustomerRequestID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employee]    Script Date: 13.04.2022 01:55:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employee](
	[EmployeeID] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeName] [varchar](50) NULL,
	[EmployeeSurname] [varchar](50) NULL,
	[Username] [varchar](50) NULL,
	[Password] [varchar](50) NULL,
	[CreationDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
 CONSTRAINT [PK_Employee] PRIMARY KEY CLUSTERED 
(
	[EmployeeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FlatStatus]    Script Date: 13.04.2022 01:55:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FlatStatus](
	[FlatStatusID] [int] IDENTITY(1,1) NOT NULL,
	[FlatStatusName] [varchar](50) NULL,
	[CreationDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
 CONSTRAINT [PK_FlatStatus] PRIMARY KEY CLUSTERED 
(
	[FlatStatusID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Gender]    Script Date: 13.04.2022 01:55:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Gender](
	[GenderID] [int] IDENTITY(1,1) NOT NULL,
	[GenderName] [varchar](50) NULL,
	[CreationDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
 CONSTRAINT [PK_Gender] PRIMARY KEY CLUSTERED 
(
	[GenderID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IncomeType]    Script Date: 13.04.2022 01:55:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IncomeType](
	[IncomeTypeID] [int] IDENTITY(1,1) NOT NULL,
	[IncomeTypeName] [varchar](50) NULL,
	[CreationDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
 CONSTRAINT [PK_IncomeType] PRIMARY KEY CLUSTERED 
(
	[IncomeTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Project]    Script Date: 13.04.2022 01:55:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Project](
	[ProjectID] [int] IDENTITY(1,1) NOT NULL,
	[ProjectName] [varchar](50) NULL,
	[CityID] [int] NULL,
	[ProjectStatusID] [int] NULL,
	[CreationDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
 CONSTRAINT [PK_Project] PRIMARY KEY CLUSTERED 
(
	[ProjectID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProjectStatus]    Script Date: 13.04.2022 01:55:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProjectStatus](
	[ProjectStatusID] [int] IDENTITY(1,1) NOT NULL,
	[ProjectStatusName] [varchar](50) NULL,
	[CreationDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
 CONSTRAINT [PK_ProjectStatus] PRIMARY KEY CLUSTERED 
(
	[ProjectStatusID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sales]    Script Date: 13.04.2022 01:55:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sales](
	[SalesID] [int] IDENTITY(1,1) NOT NULL,
	[SalesDate] [datetime] NULL,
	[CustomerID] [int] NULL,
	[FlatID] [int] NULL,
	[Price] [money] NULL,
	[EmployeeID] [int] NULL,
	[Notes] [varchar](500) NULL,
	[CreationDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
 CONSTRAINT [PK_Sales] PRIMARY KEY CLUSTERED 
(
	[SalesID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 13.04.2022 01:55:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Email] [varchar](50) NULL,
	[Password] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Visit]    Script Date: 13.04.2022 01:55:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Visit](
	[VisitID] [int] IDENTITY(1,1) NOT NULL,
	[VisitDate] [datetime] NULL,
	[CustomerID] [int] NULL,
	[ProjectID] [int] NULL,
	[Notes] [varchar](500) NULL,
	[CreationDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
 CONSTRAINT [PK_Visit] PRIMARY KEY CLUSTERED 
(
	[VisitID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[City] ON 

INSERT [dbo].[City] ([CityID], [CityName], [CreationDate], [UpdateDate]) VALUES (1, N'İstanbul', CAST(N'2022-04-12T17:42:58.457' AS DateTime), CAST(N'2022-02-23T17:42:58.457' AS DateTime))
INSERT [dbo].[City] ([CityID], [CityName], [CreationDate], [UpdateDate]) VALUES (2, N'Ankara', CAST(N'2022-04-12T17:42:58.457' AS DateTime), CAST(N'2022-02-23T17:42:58.457' AS DateTime))
INSERT [dbo].[City] ([CityID], [CityName], [CreationDate], [UpdateDate]) VALUES (3, N'İzmir', CAST(N'2022-04-12T17:42:58.457' AS DateTime), CAST(N'2022-02-23T17:42:58.457' AS DateTime))
INSERT [dbo].[City] ([CityID], [CityName], [CreationDate], [UpdateDate]) VALUES (4, N'Antalya', CAST(N'2022-04-12T17:42:58.457' AS DateTime), CAST(N'2022-02-23T17:42:58.457' AS DateTime))
INSERT [dbo].[City] ([CityID], [CityName], [CreationDate], [UpdateDate]) VALUES (8, N'Gümüşhane', CAST(N'2022-02-23T17:42:58.457' AS DateTime), CAST(N'2022-02-23T17:42:58.457' AS DateTime))
INSERT [dbo].[City] ([CityID], [CityName], [CreationDate], [UpdateDate]) VALUES (9, N'Manisa', CAST(N'2022-03-01T00:38:50.527' AS DateTime), CAST(N'2022-03-01T00:38:50.527' AS DateTime))
INSERT [dbo].[City] ([CityID], [CityName], [CreationDate], [UpdateDate]) VALUES (10, N'Ağrı', CAST(N'2022-03-01T02:21:11.037' AS DateTime), CAST(N'2022-03-01T02:21:11.037' AS DateTime))
INSERT [dbo].[City] ([CityID], [CityName], [CreationDate], [UpdateDate]) VALUES (13, N'Malatya', CAST(N'2022-03-01T02:56:59.380' AS DateTime), CAST(N'2022-03-01T02:56:59.380' AS DateTime))
SET IDENTITY_INSERT [dbo].[City] OFF
GO
SET IDENTITY_INSERT [dbo].[Customer] ON 

INSERT [dbo].[Customer] ([CustomerID], [CustomerName], [CustomerSurname], [GSM], [BirthDate], [TC], [EMail], [Address], [GenderID], [CityID], [CustomerNo], [IncomeTypeID], [CreationDate], [UpdateDate]) VALUES (1, N'Onur', N'Kulabaş', N'1111111111', CAST(N'1990-12-21' AS Date), N'024928394  ', N'ok@gmail.com', N'İstanbul', 2, 1, N'111', 1, CAST(N'2022-02-16T18:57:07.537' AS DateTime), CAST(N'2022-04-12T18:57:07.537' AS DateTime))
INSERT [dbo].[Customer] ([CustomerID], [CustomerName], [CustomerSurname], [GSM], [BirthDate], [TC], [EMail], [Address], [GenderID], [CityID], [CustomerNo], [IncomeTypeID], [CreationDate], [UpdateDate]) VALUES (2, N'Zeycan', N'Gürer', N'2222222222', CAST(N'1995-06-25' AS Date), N'67890543215', N'zg@gmail.com', N'Ankara', 1, 2, N'33', 2, CAST(N'2022-02-16T18:57:07.537' AS DateTime), CAST(N'2022-02-16T18:57:07.537' AS DateTime))
INSERT [dbo].[Customer] ([CustomerID], [CustomerName], [CustomerSurname], [GSM], [BirthDate], [TC], [EMail], [Address], [GenderID], [CityID], [CustomerNo], [IncomeTypeID], [CreationDate], [UpdateDate]) VALUES (5, N'Burak', N'Çırağ', N'4444444444', CAST(N'1998-02-02' AS Date), N'32145678909', N'bc@gmail.com', N'İstanbul', 2, 1, N'234', 2, CAST(N'2022-02-16T18:57:07.537' AS DateTime), CAST(N'2022-02-16T18:57:07.537' AS DateTime))
INSERT [dbo].[Customer] ([CustomerID], [CustomerName], [CustomerSurname], [GSM], [BirthDate], [TC], [EMail], [Address], [GenderID], [CityID], [CustomerNo], [IncomeTypeID], [CreationDate], [UpdateDate]) VALUES (30, N'Nur', N'Özkiper', N'7777777777', CAST(N'1993-01-01' AS Date), N'98765432101', N'no@gmail.com', N'İstanbul', 1, 1, N'123', 1, CAST(N'2022-02-25T20:13:11.597' AS DateTime), CAST(N'2022-02-25T20:13:11.597' AS DateTime))
SET IDENTITY_INSERT [dbo].[Customer] OFF
GO
SET IDENTITY_INSERT [dbo].[CustomerRequest] ON 

INSERT [dbo].[CustomerRequest] ([CustomerRequestID], [CustomerID], [FlatTypeID], [CreationDate], [UpdateDate]) VALUES (2, 1, 3, CAST(N'2022-01-14T16:22:11.417' AS DateTime), CAST(N'2022-01-14T16:22:11.417' AS DateTime))
INSERT [dbo].[CustomerRequest] ([CustomerRequestID], [CustomerID], [FlatTypeID], [CreationDate], [UpdateDate]) VALUES (3, 1, 4, CAST(N'2022-01-14T16:22:11.420' AS DateTime), CAST(N'2022-01-14T16:22:11.420' AS DateTime))
SET IDENTITY_INSERT [dbo].[CustomerRequest] OFF
GO
SET IDENTITY_INSERT [dbo].[Employee] ON 

INSERT [dbo].[Employee] ([EmployeeID], [EmployeeName], [EmployeeSurname], [Username], [Password], [CreationDate], [UpdateDate]) VALUES (1, N'Kaan', N'Gümüşdağ', N'kaang', N'1234', CAST(N'2022-02-16T18:35:31.723' AS DateTime), CAST(N'2022-04-12T18:35:31.723' AS DateTime))
INSERT [dbo].[Employee] ([EmployeeID], [EmployeeName], [EmployeeSurname], [Username], [Password], [CreationDate], [UpdateDate]) VALUES (2, N'Bengü', N'Neyeroğlu', N'bnguny', N'1234', CAST(N'2022-02-16T18:35:31.723' AS DateTime), CAST(N'2022-04-12T18:35:31.723' AS DateTime))
INSERT [dbo].[Employee] ([EmployeeID], [EmployeeName], [EmployeeSurname], [Username], [Password], [CreationDate], [UpdateDate]) VALUES (3, N'Esin', N'Kaplan', N'esnkpln', N'1234', CAST(N'2022-02-16T18:35:31.723' AS DateTime), CAST(N'2022-02-16T18:35:31.723' AS DateTime))
SET IDENTITY_INSERT [dbo].[Employee] OFF
GO
SET IDENTITY_INSERT [dbo].[Flat] ON 

INSERT [dbo].[Flat] ([FlatID], [FlatNo], [ProjectID], [FlatTypeID], [FlatStatusID], [Price], [CreationDate], [UpdateDate]) VALUES (1, N'101', 1, 2, 2, 100000.0000, CAST(N'2022-02-16T18:31:47.497' AS DateTime), CAST(N'2022-02-16T18:31:47.497' AS DateTime))
INSERT [dbo].[Flat] ([FlatID], [FlatNo], [ProjectID], [FlatTypeID], [FlatStatusID], [Price], [CreationDate], [UpdateDate]) VALUES (2, N'102', 1, 2, 2, 110000.0000, CAST(N'2022-02-16T18:31:47.497' AS DateTime), CAST(N'2022-02-16T18:31:47.497' AS DateTime))
INSERT [dbo].[Flat] ([FlatID], [FlatNo], [ProjectID], [FlatTypeID], [FlatStatusID], [Price], [CreationDate], [UpdateDate]) VALUES (3, N'103', 1, 4, 2, 400000.0000, CAST(N'2022-02-16T18:31:47.497' AS DateTime), CAST(N'2022-02-16T18:31:47.497' AS DateTime))
INSERT [dbo].[Flat] ([FlatID], [FlatNo], [ProjectID], [FlatTypeID], [FlatStatusID], [Price], [CreationDate], [UpdateDate]) VALUES (4, N'104', 2, 3, 1, 250000.0000, CAST(N'2022-02-16T18:31:47.497' AS DateTime), CAST(N'2022-02-16T18:31:47.497' AS DateTime))
INSERT [dbo].[Flat] ([FlatID], [FlatNo], [ProjectID], [FlatTypeID], [FlatStatusID], [Price], [CreationDate], [UpdateDate]) VALUES (5, N'105', 1, 3, 2, 43635654.0000, CAST(N'2022-02-16T18:31:47.497' AS DateTime), CAST(N'2022-02-16T18:31:47.497' AS DateTime))
INSERT [dbo].[Flat] ([FlatID], [FlatNo], [ProjectID], [FlatTypeID], [FlatStatusID], [Price], [CreationDate], [UpdateDate]) VALUES (6, N'102', 3, 2, 2, 11000.0000, CAST(N'2022-03-01T02:09:19.400' AS DateTime), CAST(N'2022-03-01T02:09:19.400' AS DateTime))
SET IDENTITY_INSERT [dbo].[Flat] OFF
GO
SET IDENTITY_INSERT [dbo].[FlatStatus] ON 

INSERT [dbo].[FlatStatus] ([FlatStatusID], [FlatStatusName], [CreationDate], [UpdateDate]) VALUES (1, N'Uygun', CAST(N'2022-02-16T18:31:47.497' AS DateTime), CAST(N'2022-02-16T18:31:47.497' AS DateTime))
INSERT [dbo].[FlatStatus] ([FlatStatusID], [FlatStatusName], [CreationDate], [UpdateDate]) VALUES (2, N'Satıldı', CAST(N'2022-02-16T18:31:47.497' AS DateTime), CAST(N'2022-02-16T18:31:47.497' AS DateTime))
SET IDENTITY_INSERT [dbo].[FlatStatus] OFF
GO
SET IDENTITY_INSERT [dbo].[FlatType] ON 

INSERT [dbo].[FlatType] ([FlatTypeID], [FlatTypeName], [CreationDate], [UpdateDate]) VALUES (1, N'1+0', CAST(N'2022-01-14T14:32:43.770' AS DateTime), CAST(N'2022-01-14T14:32:43.770' AS DateTime))
INSERT [dbo].[FlatType] ([FlatTypeID], [FlatTypeName], [CreationDate], [UpdateDate]) VALUES (2, N'1+1', CAST(N'2022-01-14T14:32:43.770' AS DateTime), CAST(N'2022-01-14T14:32:43.770' AS DateTime))
INSERT [dbo].[FlatType] ([FlatTypeID], [FlatTypeName], [CreationDate], [UpdateDate]) VALUES (3, N'2+1', CAST(N'2022-01-14T14:32:43.770' AS DateTime), CAST(N'2022-01-14T14:32:43.770' AS DateTime))
INSERT [dbo].[FlatType] ([FlatTypeID], [FlatTypeName], [CreationDate], [UpdateDate]) VALUES (4, N'3+1', CAST(N'2022-01-14T14:32:43.770' AS DateTime), CAST(N'2022-01-14T14:32:43.770' AS DateTime))
INSERT [dbo].[FlatType] ([FlatTypeID], [FlatTypeName], [CreationDate], [UpdateDate]) VALUES (5, N'4+2', CAST(N'2022-01-14T14:32:43.770' AS DateTime), CAST(N'2022-01-14T14:32:43.770' AS DateTime))
INSERT [dbo].[FlatType] ([FlatTypeID], [FlatTypeName], [CreationDate], [UpdateDate]) VALUES (9, N'6+3', CAST(N'2022-02-23T14:02:54.537' AS DateTime), CAST(N'2022-02-23T14:02:54.537' AS DateTime))
SET IDENTITY_INSERT [dbo].[FlatType] OFF
GO
SET IDENTITY_INSERT [dbo].[Gender] ON 

INSERT [dbo].[Gender] ([GenderID], [GenderName], [CreationDate], [UpdateDate]) VALUES (1, N'Kadın', CAST(N'2022-01-14T14:32:43.770' AS DateTime), CAST(N'2022-01-14T14:32:43.770' AS DateTime))
INSERT [dbo].[Gender] ([GenderID], [GenderName], [CreationDate], [UpdateDate]) VALUES (2, N'Erkek', CAST(N'2022-01-14T14:32:43.770' AS DateTime), CAST(N'2022-01-14T14:32:43.770' AS DateTime))
SET IDENTITY_INSERT [dbo].[Gender] OFF
GO
SET IDENTITY_INSERT [dbo].[IncomeType] ON 

INSERT [dbo].[IncomeType] ([IncomeTypeID], [IncomeTypeName], [CreationDate], [UpdateDate]) VALUES (1, N'A', CAST(N'2022-02-16T17:47:41.900' AS DateTime), CAST(N'2022-02-16T17:47:41.900' AS DateTime))
INSERT [dbo].[IncomeType] ([IncomeTypeID], [IncomeTypeName], [CreationDate], [UpdateDate]) VALUES (2, N'B', CAST(N'2022-02-16T17:47:41.900' AS DateTime), CAST(N'2022-02-16T17:47:41.900' AS DateTime))
INSERT [dbo].[IncomeType] ([IncomeTypeID], [IncomeTypeName], [CreationDate], [UpdateDate]) VALUES (3, N'C', CAST(N'2022-02-16T17:47:41.900' AS DateTime), CAST(N'2022-02-16T17:47:41.900' AS DateTime))
INSERT [dbo].[IncomeType] ([IncomeTypeID], [IncomeTypeName], [CreationDate], [UpdateDate]) VALUES (4, N'D', CAST(N'2022-02-16T17:47:41.900' AS DateTime), CAST(N'2022-02-16T17:47:41.900' AS DateTime))
INSERT [dbo].[IncomeType] ([IncomeTypeID], [IncomeTypeName], [CreationDate], [UpdateDate]) VALUES (5, N'E', CAST(N'2022-02-16T17:47:41.900' AS DateTime), CAST(N'2022-02-16T17:47:41.900' AS DateTime))
SET IDENTITY_INSERT [dbo].[IncomeType] OFF
GO
SET IDENTITY_INSERT [dbo].[Project] ON 

INSERT [dbo].[Project] ([ProjectID], [ProjectName], [CityID], [ProjectStatusID], [CreationDate], [UpdateDate]) VALUES (1, N'Suryapı Samsun', 2, 1, CAST(N'2022-02-16T18:16:09.367' AS DateTime), CAST(N'2022-02-16T18:16:09.367' AS DateTime))
INSERT [dbo].[Project] ([ProjectID], [ProjectName], [CityID], [ProjectStatusID], [CreationDate], [UpdateDate]) VALUES (2, N'Suryapı İzmir', 3, 1, CAST(N'2022-02-16T18:16:09.367' AS DateTime), CAST(N'2022-02-16T18:16:09.367' AS DateTime))
INSERT [dbo].[Project] ([ProjectID], [ProjectName], [CityID], [ProjectStatusID], [CreationDate], [UpdateDate]) VALUES (3, N'Suryapı İstanbul', 1, 3, CAST(N'2022-02-16T18:16:09.367' AS DateTime), CAST(N'2022-02-16T18:16:09.367' AS DateTime))
INSERT [dbo].[Project] ([ProjectID], [ProjectName], [CityID], [ProjectStatusID], [CreationDate], [UpdateDate]) VALUES (4, N'Suryapı İzmit', 1, 1, CAST(N'2022-02-16T18:16:09.367' AS DateTime), CAST(N'2022-02-16T18:16:09.367' AS DateTime))
INSERT [dbo].[Project] ([ProjectID], [ProjectName], [CityID], [ProjectStatusID], [CreationDate], [UpdateDate]) VALUES (6, N'Suryapı Manisa', 9, 2, CAST(N'2022-03-01T02:05:31.393' AS DateTime), CAST(N'2022-03-01T02:05:31.393' AS DateTime))
INSERT [dbo].[Project] ([ProjectID], [ProjectName], [CityID], [ProjectStatusID], [CreationDate], [UpdateDate]) VALUES (7, N'Proje Malatya', 13, 2, CAST(N'2022-04-13T00:47:53.193' AS DateTime), CAST(N'2022-04-13T00:47:53.193' AS DateTime))
INSERT [dbo].[Project] ([ProjectID], [ProjectName], [CityID], [ProjectStatusID], [CreationDate], [UpdateDate]) VALUES (8, N'Proje Manisa', 9, 2, CAST(N'2022-04-13T01:23:38.323' AS DateTime), CAST(N'2022-04-13T01:23:38.323' AS DateTime))
INSERT [dbo].[Project] ([ProjectID], [ProjectName], [CityID], [ProjectStatusID], [CreationDate], [UpdateDate]) VALUES (9, N'Suryapı Manisa', 9, 1, CAST(N'2022-04-13T01:25:15.147' AS DateTime), CAST(N'2022-04-13T01:25:15.147' AS DateTime))
INSERT [dbo].[Project] ([ProjectID], [ProjectName], [CityID], [ProjectStatusID], [CreationDate], [UpdateDate]) VALUES (10, N'Suryapı Gümüşhane', 8, 2, CAST(N'2022-04-13T01:32:37.850' AS DateTime), CAST(N'2022-04-13T01:32:37.850' AS DateTime))
SET IDENTITY_INSERT [dbo].[Project] OFF
GO
SET IDENTITY_INSERT [dbo].[ProjectStatus] ON 

INSERT [dbo].[ProjectStatus] ([ProjectStatusID], [ProjectStatusName], [CreationDate], [UpdateDate]) VALUES (1, N'Tamamlandı', CAST(N'2022-02-16T17:54:42.240' AS DateTime), CAST(N'2022-02-16T17:54:42.240' AS DateTime))
INSERT [dbo].[ProjectStatus] ([ProjectStatusID], [ProjectStatusName], [CreationDate], [UpdateDate]) VALUES (2, N'İnşaat Halinde', CAST(N'2022-02-16T17:54:42.240' AS DateTime), CAST(N'2022-02-16T17:54:42.240' AS DateTime))
INSERT [dbo].[ProjectStatus] ([ProjectStatusID], [ProjectStatusName], [CreationDate], [UpdateDate]) VALUES (3, N'Deneme', CAST(N'2022-02-16T17:54:42.240' AS DateTime), CAST(N'2022-02-16T17:54:42.240' AS DateTime))
SET IDENTITY_INSERT [dbo].[ProjectStatus] OFF
GO
SET IDENTITY_INSERT [dbo].[Sales] ON 

INSERT [dbo].[Sales] ([SalesID], [SalesDate], [CustomerID], [FlatID], [Price], [EmployeeID], [Notes], [CreationDate], [UpdateDate]) VALUES (2, CAST(N'2022-01-01T00:00:00.000' AS DateTime), 2, 2, 30000.0000, 1, N'Notlar', CAST(N'2021-12-31T00:00:00.000' AS DateTime), CAST(N'2022-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[Sales] ([SalesID], [SalesDate], [CustomerID], [FlatID], [Price], [EmployeeID], [Notes], [CreationDate], [UpdateDate]) VALUES (3, CAST(N'2021-12-22T00:00:00.000' AS DateTime), 1, 2, 200000.0000, 1, N'Notlar', CAST(N'2022-01-14T14:30:42.477' AS DateTime), CAST(N'2022-04-12T14:30:42.477' AS DateTime))
INSERT [dbo].[Sales] ([SalesID], [SalesDate], [CustomerID], [FlatID], [Price], [EmployeeID], [Notes], [CreationDate], [UpdateDate]) VALUES (4, CAST(N'2022-01-14T00:00:00.000' AS DateTime), 1, 1, 3000.0000, 2, N'Notlar', CAST(N'2022-01-14T14:30:42.477' AS DateTime), CAST(N'2022-01-14T14:30:42.477' AS DateTime))
INSERT [dbo].[Sales] ([SalesID], [SalesDate], [CustomerID], [FlatID], [Price], [EmployeeID], [Notes], [CreationDate], [UpdateDate]) VALUES (6, CAST(N'2021-10-10T00:00:00.000' AS DateTime), 1, 1, 234.0000, 1, N'Notlar', CAST(N'2022-02-10T18:02:57.057' AS DateTime), CAST(N'2022-02-10T18:02:57.057' AS DateTime))
INSERT [dbo].[Sales] ([SalesID], [SalesDate], [CustomerID], [FlatID], [Price], [EmployeeID], [Notes], [CreationDate], [UpdateDate]) VALUES (7, CAST(N'2021-10-10T00:00:00.000' AS DateTime), 1, 1, 234.0000, 1, N'Notlar', CAST(N'2022-02-10T18:19:04.090' AS DateTime), CAST(N'2022-02-10T18:19:04.090' AS DateTime))
INSERT [dbo].[Sales] ([SalesID], [SalesDate], [CustomerID], [FlatID], [Price], [EmployeeID], [Notes], [CreationDate], [UpdateDate]) VALUES (8, CAST(N'2021-10-10T00:00:00.000' AS DateTime), 1, 1, 234.0000, 1, N'Notlar', CAST(N'2022-02-14T20:31:30.817' AS DateTime), CAST(N'2022-02-14T20:31:30.817' AS DateTime))
INSERT [dbo].[Sales] ([SalesID], [SalesDate], [CustomerID], [FlatID], [Price], [EmployeeID], [Notes], [CreationDate], [UpdateDate]) VALUES (9, CAST(N'2021-10-10T00:00:00.000' AS DateTime), 1, 1, 234.0000, 1, N'Notlar', CAST(N'2022-02-15T10:21:09.387' AS DateTime), CAST(N'2022-02-15T10:21:09.387' AS DateTime))
INSERT [dbo].[Sales] ([SalesID], [SalesDate], [CustomerID], [FlatID], [Price], [EmployeeID], [Notes], [CreationDate], [UpdateDate]) VALUES (10, CAST(N'2022-01-01T00:00:00.000' AS DateTime), 2, 2, 450000.0000, 2, N'Notlar', CAST(N'2022-02-16T19:00:21.417' AS DateTime), CAST(N'2022-02-16T19:00:21.417' AS DateTime))
INSERT [dbo].[Sales] ([SalesID], [SalesDate], [CustomerID], [FlatID], [Price], [EmployeeID], [Notes], [CreationDate], [UpdateDate]) VALUES (11, CAST(N'2021-10-10T00:00:00.000' AS DateTime), 1, 1, 234.0000, 1, N'Notlar', CAST(N'2022-02-23T14:02:21.660' AS DateTime), CAST(N'2022-02-23T14:02:21.660' AS DateTime))
SET IDENTITY_INSERT [dbo].[Sales] OFF
GO
INSERT [dbo].[Users] ([Email], [Password]) VALUES (N'zeycan', N'1')
GO
SET IDENTITY_INSERT [dbo].[Visit] ON 

INSERT [dbo].[Visit] ([VisitID], [VisitDate], [CustomerID], [ProjectID], [Notes], [CreationDate], [UpdateDate]) VALUES (1, CAST(N'2021-12-20T00:00:00.000' AS DateTime), 1, 1, N'Not', CAST(N'2022-02-16T19:02:47.040' AS DateTime), CAST(N'2022-02-16T19:02:47.040' AS DateTime))
INSERT [dbo].[Visit] ([VisitID], [VisitDate], [CustomerID], [ProjectID], [Notes], [CreationDate], [UpdateDate]) VALUES (3, CAST(N'2021-12-21T00:00:00.000' AS DateTime), 1, 1, N'Bir daha geldi baktı.', CAST(N'2022-02-16T19:02:47.040' AS DateTime), CAST(N'2022-02-16T19:02:47.040' AS DateTime))
INSERT [dbo].[Visit] ([VisitID], [VisitDate], [CustomerID], [ProjectID], [Notes], [CreationDate], [UpdateDate]) VALUES (5, CAST(N'2022-01-01T00:00:00.000' AS DateTime), 5, 1, N'Not', CAST(N'2022-02-16T19:02:47.040' AS DateTime), CAST(N'2022-02-16T19:02:47.040' AS DateTime))
SET IDENTITY_INSERT [dbo].[Visit] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Customer]    Script Date: 13.04.2022 01:55:14 ******/
ALTER TABLE [dbo].[Customer] ADD  CONSTRAINT [IX_Customer] UNIQUE NONCLUSTERED 
(
	[CustomerNo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Customer_1]    Script Date: 13.04.2022 01:55:14 ******/
ALTER TABLE [dbo].[Customer] ADD  CONSTRAINT [IX_Customer_1] UNIQUE NONCLUSTERED 
(
	[TC] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[City] ADD  CONSTRAINT [DF_City_CreationDate]  DEFAULT (getdate()) FOR [CreationDate]
GO
ALTER TABLE [dbo].[City] ADD  CONSTRAINT [DF_City_UpdateDate]  DEFAULT (getdate()) FOR [UpdateDate]
GO
ALTER TABLE [dbo].[Customer] ADD  CONSTRAINT [DF_Customer_CreationDate]  DEFAULT (getdate()) FOR [CreationDate]
GO
ALTER TABLE [dbo].[Customer] ADD  CONSTRAINT [DF_Customer_UpdateDate]  DEFAULT (getdate()) FOR [UpdateDate]
GO
ALTER TABLE [dbo].[CustomerRequest] ADD  CONSTRAINT [DF_CustomerRequest_CreationDate]  DEFAULT (getdate()) FOR [CreationDate]
GO
ALTER TABLE [dbo].[CustomerRequest] ADD  CONSTRAINT [DF_CustomerRequest_UpdateDate]  DEFAULT (getdate()) FOR [UpdateDate]
GO
ALTER TABLE [dbo].[Employee] ADD  CONSTRAINT [DF_Employee_CreationDate]  DEFAULT (getdate()) FOR [CreationDate]
GO
ALTER TABLE [dbo].[Employee] ADD  CONSTRAINT [DF_Employee_UpdateDate]  DEFAULT (getdate()) FOR [UpdateDate]
GO
ALTER TABLE [dbo].[Flat] ADD  CONSTRAINT [DF_Flat_CreationDate]  DEFAULT (getdate()) FOR [CreationDate]
GO
ALTER TABLE [dbo].[Flat] ADD  CONSTRAINT [DF_Flat_UpdateDate]  DEFAULT (getdate()) FOR [UpdateDate]
GO
ALTER TABLE [dbo].[FlatStatus] ADD  CONSTRAINT [DF_FlatStatus_CreationDate]  DEFAULT (getdate()) FOR [CreationDate]
GO
ALTER TABLE [dbo].[FlatStatus] ADD  CONSTRAINT [DF_FlatStatus_UpdateDate]  DEFAULT (getdate()) FOR [UpdateDate]
GO
ALTER TABLE [dbo].[FlatType] ADD  CONSTRAINT [DF_FlatType_CreationDate]  DEFAULT (getdate()) FOR [CreationDate]
GO
ALTER TABLE [dbo].[FlatType] ADD  CONSTRAINT [DF_FlatType_UpdateDate]  DEFAULT (getdate()) FOR [UpdateDate]
GO
ALTER TABLE [dbo].[Gender] ADD  CONSTRAINT [DF_Gender_CreationDate]  DEFAULT (getdate()) FOR [CreationDate]
GO
ALTER TABLE [dbo].[Gender] ADD  CONSTRAINT [DF_Gender_UpdateDate]  DEFAULT (getdate()) FOR [UpdateDate]
GO
ALTER TABLE [dbo].[IncomeType] ADD  CONSTRAINT [DF_IncomeType_CreationDate]  DEFAULT (getdate()) FOR [CreationDate]
GO
ALTER TABLE [dbo].[IncomeType] ADD  CONSTRAINT [DF_IncomeType_UpdateDate]  DEFAULT (getdate()) FOR [UpdateDate]
GO
ALTER TABLE [dbo].[Project] ADD  CONSTRAINT [DF_Project_CreationDate]  DEFAULT (getdate()) FOR [CreationDate]
GO
ALTER TABLE [dbo].[Project] ADD  CONSTRAINT [DF_Project_UpdateDate]  DEFAULT (getdate()) FOR [UpdateDate]
GO
ALTER TABLE [dbo].[ProjectStatus] ADD  CONSTRAINT [DF_ProjectStatus_CreationDate]  DEFAULT (getdate()) FOR [CreationDate]
GO
ALTER TABLE [dbo].[ProjectStatus] ADD  CONSTRAINT [DF_ProjectStatus_UpdateDate]  DEFAULT (getdate()) FOR [UpdateDate]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_CreationDate]  DEFAULT (getdate()) FOR [CreationDate]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_UpdateDate]  DEFAULT (getdate()) FOR [UpdateDate]
GO
ALTER TABLE [dbo].[Visit] ADD  CONSTRAINT [DF_Visit_CreationDate]  DEFAULT (getdate()) FOR [CreationDate]
GO
ALTER TABLE [dbo].[Visit] ADD  CONSTRAINT [DF_Visit_UpdateDate]  DEFAULT (getdate()) FOR [UpdateDate]
GO
ALTER TABLE [dbo].[Customer]  WITH CHECK ADD  CONSTRAINT [FK_Customer_City] FOREIGN KEY([CityID])
REFERENCES [dbo].[City] ([CityID])
GO
ALTER TABLE [dbo].[Customer] CHECK CONSTRAINT [FK_Customer_City]
GO
ALTER TABLE [dbo].[Customer]  WITH CHECK ADD  CONSTRAINT [FK_Customer_Gender] FOREIGN KEY([GenderID])
REFERENCES [dbo].[Gender] ([GenderID])
GO
ALTER TABLE [dbo].[Customer] CHECK CONSTRAINT [FK_Customer_Gender]
GO
ALTER TABLE [dbo].[Customer]  WITH CHECK ADD  CONSTRAINT [FK_Customer_IncomeType] FOREIGN KEY([IncomeTypeID])
REFERENCES [dbo].[IncomeType] ([IncomeTypeID])
GO
ALTER TABLE [dbo].[Customer] CHECK CONSTRAINT [FK_Customer_IncomeType]
GO
ALTER TABLE [dbo].[CustomerRequest]  WITH CHECK ADD  CONSTRAINT [FK_CustomerRequest_Customer] FOREIGN KEY([CustomerID])
REFERENCES [dbo].[Customer] ([CustomerID])
GO
ALTER TABLE [dbo].[CustomerRequest] CHECK CONSTRAINT [FK_CustomerRequest_Customer]
GO
ALTER TABLE [dbo].[CustomerRequest]  WITH CHECK ADD  CONSTRAINT [FK_CustomerRequest_FlatType] FOREIGN KEY([FlatTypeID])
REFERENCES [dbo].[FlatType] ([FlatTypeID])
GO
ALTER TABLE [dbo].[CustomerRequest] CHECK CONSTRAINT [FK_CustomerRequest_FlatType]
GO
ALTER TABLE [dbo].[Flat]  WITH CHECK ADD  CONSTRAINT [FK_Flat_FlatStatus] FOREIGN KEY([FlatStatusID])
REFERENCES [dbo].[FlatStatus] ([FlatStatusID])
GO
ALTER TABLE [dbo].[Flat] CHECK CONSTRAINT [FK_Flat_FlatStatus]
GO
ALTER TABLE [dbo].[Flat]  WITH CHECK ADD  CONSTRAINT [FK_Flat_FlatType] FOREIGN KEY([FlatTypeID])
REFERENCES [dbo].[FlatType] ([FlatTypeID])
GO
ALTER TABLE [dbo].[Flat] CHECK CONSTRAINT [FK_Flat_FlatType]
GO
ALTER TABLE [dbo].[Flat]  WITH CHECK ADD  CONSTRAINT [FK_Flat_Project] FOREIGN KEY([ProjectID])
REFERENCES [dbo].[Project] ([ProjectID])
GO
ALTER TABLE [dbo].[Flat] CHECK CONSTRAINT [FK_Flat_Project]
GO
ALTER TABLE [dbo].[Project]  WITH CHECK ADD  CONSTRAINT [FK_Project_City] FOREIGN KEY([CityID])
REFERENCES [dbo].[City] ([CityID])
GO
ALTER TABLE [dbo].[Project] CHECK CONSTRAINT [FK_Project_City]
GO
ALTER TABLE [dbo].[Project]  WITH CHECK ADD  CONSTRAINT [FK_Project_ProjectStatus] FOREIGN KEY([ProjectStatusID])
REFERENCES [dbo].[ProjectStatus] ([ProjectStatusID])
GO
ALTER TABLE [dbo].[Project] CHECK CONSTRAINT [FK_Project_ProjectStatus]
GO
ALTER TABLE [dbo].[Sales]  WITH CHECK ADD  CONSTRAINT [FK_Sales_Customer] FOREIGN KEY([CustomerID])
REFERENCES [dbo].[Customer] ([CustomerID])
GO
ALTER TABLE [dbo].[Sales] CHECK CONSTRAINT [FK_Sales_Customer]
GO
ALTER TABLE [dbo].[Sales]  WITH CHECK ADD  CONSTRAINT [FK_Sales_Employee] FOREIGN KEY([EmployeeID])
REFERENCES [dbo].[Employee] ([EmployeeID])
GO
ALTER TABLE [dbo].[Sales] CHECK CONSTRAINT [FK_Sales_Employee]
GO
ALTER TABLE [dbo].[Sales]  WITH CHECK ADD  CONSTRAINT [FK_Sales_Flat] FOREIGN KEY([FlatID])
REFERENCES [dbo].[Flat] ([FlatID])
GO
ALTER TABLE [dbo].[Sales] CHECK CONSTRAINT [FK_Sales_Flat]
GO
ALTER TABLE [dbo].[Visit]  WITH CHECK ADD  CONSTRAINT [FK_Visit_Customer] FOREIGN KEY([CustomerID])
REFERENCES [dbo].[Customer] ([CustomerID])
GO
ALTER TABLE [dbo].[Visit] CHECK CONSTRAINT [FK_Visit_Customer]
GO
ALTER TABLE [dbo].[Visit]  WITH CHECK ADD  CONSTRAINT [FK_Visit_Project] FOREIGN KEY([ProjectID])
REFERENCES [dbo].[Project] ([ProjectID])
GO
ALTER TABLE [dbo].[Visit] CHECK CONSTRAINT [FK_Visit_Project]
GO
USE [master]
GO
ALTER DATABASE [Insaat] SET  READ_WRITE 
GO
