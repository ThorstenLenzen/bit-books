using System.Collections.Generic;
using BitBooks.WebApi.Models;

namespace BitBooks.WebApi.DataAccess
{
    public class ArrayBasedBookRepository : IBookRepository
    {
        private static readonly IList<Book> Books;

        static ArrayBasedBookRepository()
        {
            Books = new List<Book>
            {
                new Book
                {
                    Isbn = "B00JYE19YE",
                    Title = "Introducing Windows Azure for IT Professionals",
                    Description = "Get a head start evaluating Windows Azure - with technical insights from a Microsoft MVP Mitch Tulloch. This guide introduces the latest features and capabilities, with scenario-based advice on how the platform can meet the needs of your business. Get the high-level overview you need to begin preparing your deployment now.",
                    Rating = 4
                },
                new Book
                {
                    Isbn = "B00LXAAMSG",
                    Title = "Building Cloud Apps with Microsoft Azure",
                    Description = "This ebook walks you through a patterns-based approach to building real-world cloud solutions. The patterns apply to the development process as well as to architecture and coding practices.\r\nThe content is based on a presentation developed by Scott Guthrie and delivered by him at the Norwegian Developers Conference (NDC) in June of 2013 (part 1, part 2), and at Microsoft Tech Ed Australia in September 2013 (part 1, part 2). Many others updated and augmented the content while transitioning it from video to written form.",
                    Rating = 5
                },
                new Book
                {
                    Isbn = "B00OFR1BRK",
                    Title = "Microsoft Azure: Cloud-Entwicklung für lokale Applikationen",
                    Description = "Mit der Microsoft-Cloud Azure lassen sich hoch skalierbare, weltweit verteilte Anwendungen für Millionen von Endnutzern erstellen. Doch auch in kleineren, lokalen Projekten können Softwareentwickler von Azure profitieren. Dieser shortcut zeigt, wie sich Azure-Dienste sinnvoll und sicher in Nicht-Cloud-Applikationen einsetzen lassen. Anhand von Beispielen aus dem Projektalltag werden Szenarien skizziert, in denen Cloud-Dienste eine Lösung für gängige Probleme lokaler Applikationen bieten. Im Fokus stehen unter anderem Azure Storage, Azure Service Bus und Azure Scheduler sowie die Aufbereitung von statischen und dynamischen Daten in der Cloud und das Sammeln von Client-Log-Dateien.",
                    Rating = 0
                },
                new Book
                {
                    Isbn = "B0119THDZA",
                    Title = "Microsoft Azure Essentials Azure Web Apps for Developers",
                    Description = "The “Microsoft Azure Essentials” series helps you advance your technical skills with Microsoft Azure. “Microsoft Azure Essentials: Azure Web Apps for Developers” focuses on providing essential information about developing web applications hosted on Azure Web Apps. It is written with the developer who has experience using Visual Studio and the .NET Framework in mind. If Azure Web Apps is new to you, this book is for you. If you have experience developing for Azure Web Apps, this book is for you, too, because there are features and tools discussed in this text that are new to the platform.",
                    Rating = 0
                },
                new Book
                {
                    Isbn = "1484210441",
                    Title = "Microsoft Azure: Planning, Deploying, and Managing Your Data Center in the Cloud",
                    Description = "Written for IT and business professionals, this book provides the technical and business insight needed to plan, deploy and manage the services provided by the Microsoft Azure cloud. Find out how to integrate the infrastructure-as-a-service (IaaS) and platform-as-a-service (PaaS) models with your existing business infrastructure while maximizing availability, ensuring continuity and safety of your data, and keeping costs to a minimum.",
                    Rating = 3
                },
                new Book
                {
                    Isbn = "1484212762",
                    Title = "Microservices, IoT and Azure: Leveraging DevOps and Microservice Architecture to deliver SaaS Solutions",
                    Description = "The book provides a working definition of microservices and contrasts this approach with traditional monolithic Layered Architecture. A fictitious, homebiomedical startup is used to demonstrate microservice architecture and automation capabilities for cross-cutting and business services as well as connected device scenarios for Internet of Things (IoT). Several Azure PaaS services are detailed including Storage, SQL Database, DocumentDb, Redis Cache, Cloud Services, Web API\'s, API Management, IoT Hub, IoT Suite, Event Hub, and Stream Analytics. Finally the book looks to the future and examines Service Fabric to see how microservices are becoming the de facto approach to building reliable software in the cloud.",
                    Rating = 4
                },
            };
        }

        public IList<Book> GetAllBooks()
        {
            return Books;
        }

        public void AddBook(Book book)
        {
            Books.Add(book);
        }
    }
}